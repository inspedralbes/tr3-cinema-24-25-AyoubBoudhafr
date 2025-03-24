import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import styles from './Chat.module.css';

const Chat = ({ productoId, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const chatContainerRef = useRef(null);
  const stompClient = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  useEffect(() => {
    const fetchMessages = async () => {
      //const response = await fetch(`http://tu-api-spring/mensajes/${productoId}`);
      //const data = await response.json();
      //setMessages(data);
    };
    fetchMessages();
  }, [productoId]);

  useEffect(() => {
    const socket = new SockJS('http://tu-api-spring/ws');
    stompClient.current = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });

    stompClient.current.onConnect = (frame) => {
      stompClient.current.subscribe(`/topic/chat/${productoId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages(prev => [...prev, newMessage]);
      });
    };

    stompClient.current.activate();

    return () => {
      if (stompClient.current) {
        stompClient.current.deactivate();
      }
    };
  }, [productoId]);

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
      x: newX,
      y: newY,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      contenido: inputMessage,
      fecha: new Date().toISOString(),
      usuario: localStorage.getItem('usuario') || 'Anónimo',
      productoId: productoId
    };

    if (stompClient.current && stompClient.current.connected) {
      stompClient.current.publish({
        destination: '/app/enviar-mensaje',
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
        transform: `translate(${position.x}px, ${position.y}px)`,
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
        {usuario.nombre}
        <button className={styles.closeButton} onClick={onClose}>×</button>
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.usuario === localStorage.getItem('usuario') 
                ? styles.userMessage 
                : styles.otherMessage
            }`}
          >
            <div className={styles.messageHeader}>
              <span className={styles.messageUser}>{message.usuario}</span>
              <span className={styles.messageTime}>
                {new Date(message.fecha).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
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