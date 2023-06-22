'use client';
import React, { useState } from 'react';
import './Chat.scss';
import Link from 'next/link';
import { userAgent } from 'next/server';
import { BsFillSendFill } from 'react-icons/bs';


// Declaration of the Message interface
interface Message {
    id: number;
    content: string;
    senderId: number;
}

// Array of messages with the Message type

const messageData: Message[] = [
    {
        id: Date.now() + 2,
        content: "Hello, Juan",
        senderId: 1,
    },
    {
        id: Date.now() + 3,
        content: "Hello, Yurany",
        senderId: 2,
    },
    {
        id: Date.now() + 4,
        content: "How are you?",
        senderId: 1,
    },
];

// Array of user data
const userData = [
    {
        id: 1,
        name: "Juan",
        avatar: "https://www.blogdelfotografo.com/wp-content/uploads/2022/01/retrato-anillo-luz.webp",
    },
    {
        id: 2,
        name: "Yurany",
        avatar: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg",
    },
];

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>(messageData);  // State hook to manage the messages
    const [newMessage, setNewMessage] = useState('');  // State hook to manage the new message input

    const handleSendMessage = () => {  // Function to handle sending a new message
        if (newMessage.trim() !== '') {
            const newMsg: Message = {
                id: Date.now(),
                content: newMessage,
                senderId: 1, // Change the ID according to the current sender
            };

            setMessages([...messages, newMsg]);
            setNewMessage('');
        }
    };

    const getUserData = (senderId: number) => {   // Function to get user data based on senderId
        return userData.find((user) => user.id === senderId);
    };

    return (

        <div className="chat-container">
            <div className="profile-header">
                <img src={getUserData(1)?.avatar} className="avatarprofile" />
                <span className='user-name-profile'>{getUserData(1)?.name}</span>
            </div>
            <div className="message-container">

                {messages.map((message) => (
                    <article key={message.id}>
                        <div
                            className={`message ${message.senderId === 1 ? 'user' : 'bot'
                                }`}
                        >
                            <img
                                src={getUserData(message.senderId)?.avatar}
                                alt={getUserData(message.senderId)?.name}
                                className="avatar"
                            />
                            <div className="message-content">
                                <span className="username">
                                    {getUserData(message.senderId)?.name}
                                </span>
                                <span className="message-text">{message.content}</span>
                            </div>
                        </div>
                        <span>{(new Date(message.id)).getUTCHours() + ":" + (new Date(message.id)).getUTCMinutes()}</span>
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
                <button onClick={handleSendMessage}>
                    <BsFillSendFill/>
                </button>
            </div>
        </div>
    );
};

export default Chat; // Exporting the Chat component for use in other files