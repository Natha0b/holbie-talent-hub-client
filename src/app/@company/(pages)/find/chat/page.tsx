'use client';
import React, { useState } from 'react';
import './Chat.css';

interface Message {
    id: number;
    content: string;
    sender: string;
}

const messageData = [
    {
        id: Date.now() + 2,
        content: "Hello, Juan",
        sender: "bot",
    },

    {
        id: Date.now() + 3,
        content: "Hello, Yurany",
        sender: "user",
    },

    {
        id: Date.now() + 4,
        content: "¿How are you?",
        sender: "bot",
    }
]

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>(messageData);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMsg: Message = {
                id: Date.now(),
                content: newMessage,
                sender: 'user',
            };

            setMessages([...messages, newMsg]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="message-container">
                {messages.map((message) => (
                    <article>
                    <div
                        key={message.id}
                        className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
                    >
                        <span>{message.content}</span>
                    </div>
                    <span> {(new Date(message.id)).getUTCHours()+ ":" + (new Date(message.id)).getUTCMinutes()}</span>
                    </article>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}> <img src="https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-send-4341325_120524.png" height="30" width="30" /> </button>
            </div>
        </div>
    );
};

export default Chat;