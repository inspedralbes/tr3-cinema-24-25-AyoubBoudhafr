import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import styles from './Chat.module.css';

const Chat = ({ productoId, onClose, vendedor }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth - 400 : 50,
    y: typeof window !== 'undefined' ? window.innerHeight - 500 : 50
  });

  const chatContainerRef = useRef(null);
  const stompClient = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/mensajes/${productoId}`);

        if (!response.ok) {
          console.error('Respuesta no exitosa:', response.status);
          setMessages([]);
          return;
        }

        const result = await response.json();
        const messagesData = Array.isArray(result) ? result : result?.content || [];

        setMessages(messagesData.map(msg => ({
          usuario: msg.sender || 'Desconocido',
          contenido: msg.content || '',
          fecha: msg.sentAt || new Date().toISOString()
        })));

      } catch (error) {
        console.error('Error en la solicitud:', error);
        setMessages([]);
      }
    };

    fetchMessages();
  }, [productoId]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient.current = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });

    stompClient.current.onConnect = () => {
      stompClient.current.subscribe(`/topic/chat/${productoId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages(prev => [...prev, {
          usuario: newMessage.sender,
          contenido: newMessage.content,
          fecha: newMessage.sentAt
        }]);
      });
    };

    stompClient.current.activate();

    return () => {
      if (stompClient.current) {
        stompClient.current.deactivate();
      }
    };
  }, [productoId]);

  useEffect(() => {
    const handleResize = () => {
      setPosition({
        x: window.innerWidth - 400,
        y: window.innerHeight - 550,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStartPos.current.x;
    const newY = e.clientY - dragStartPos.current.y;
    const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 350));
    const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 500));
    setPosition({ x: boundedX, y: boundedY });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      sender: localStorage.getItem('usuario') || 'Anónimo',
      content: inputMessage,
      chatId: productoId
    };

    if (stompClient.current?.connected) {
      stompClient.current.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(newMessage)
      });
    }

    setInputMessage('');
  };

  return (
    <div
      ref={chatContainerRef}
      className={styles.chatContainer}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
    >
      <div
        className={styles.chatHeader}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <span>{vendedor}</span>
        <button className={styles.closeButton} onClick={onClose}>×</button>
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${message.usuario === (localStorage.getItem('usuario') || 'Anónimo')
                ? styles.userMessage
                : styles.otherMessage
              }`}
          >
            <div className={styles.messageHeader}>
              <span className={styles.messageUser}>{message.usuario}</span>
              <span className={styles.messageTime}>
                {new Date(message.fecha).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
            <div className={styles.messageContent}>{message.contenido}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className={styles.chatInput}
        />
        <button type="submit" className={styles.sendButton}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;