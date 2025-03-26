import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { getChat } from './../../services/comunicationManager';
import styles from './Chat.module.css';

const Chat = ({ productoId, onClose, vendedor, compradorId }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: window.innerWidth - 400,
    y: window.innerHeight - 500,
  });
  const [chatId, setChatId] = useState(null);

  const chatContainerRef = useRef(null);
  const stompClient = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fetchChat = async () => {
      const chat = await getChat(1, 1);
      if (chat) {
        setChatId(chat.id);
        setMessages(chat.messages || []);
      }
    };

    fetchChat();
  }, [compradorId, vendedor]);

  useEffect(() => {
    if (!chatId) return;

    const socket = new SockJS('http://localhost:8080/ws');
    stompClient.current = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: console.log,
    });

    stompClient.current.onConnect = () => {
      stompClient.current.subscribe(`/topic/chat/${chatId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages(prev => [...prev, {
          usuario: newMessage.sender,
          contenido: newMessage.content,
          fecha: newMessage.sentAt,
        }]);
      });
    };

    stompClient.current.activate();

    return () => {
      if (stompClient.current) stompClient.current.deactivate();
    };
  }, [chatId]);

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
    setPosition({
      x: Math.max(0, Math.min(newX, window.innerWidth - 350)),
      y: Math.max(0, Math.min(newY, window.innerHeight - 500)),
    });
  };

  const handleDragEnd = () => setIsDragging(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !chatId) return;

    const newMessage = {
      sender: localStorage.getItem('usuario') || 'Anónimo',
      content: inputMessage,
      chatId,
    };

    if (stompClient.current?.connected) {
      stompClient.current.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(newMessage),
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
