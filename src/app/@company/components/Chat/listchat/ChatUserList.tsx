'use client';
import React from 'react';
import './ChatUserList.scss';
import Image from 'next/image';

export interface IUser {
    id: number;
    name: string;
    avatar: string;
    lastSeen: string;
}

interface ChatUserListProps {
    users: IUser[];
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    selected: number;
}

export const ChatUserList: React.FC<ChatUserListProps> = ({ users, selected, setSelected }) => {


    return (
        <div className="chat-user-list">
            <h3>Chats</h3>
            <ul>
                {users.length > 0 ? (
                    users
                        .map(user => (
                            <li
                                key={user.id}
                                className={`${"chat-user"} ${Number.isNaN(selected) ? "" : selected === user.id ? "chat-user--active" : "chat-user--inactive"}`}
                                onClick={() => {
                                    if (selected === user.id)
                                        return setSelected(NaN);
                                    return setSelected(user.id);
                                }}
                            >
                                <Image src={user.avatar} alt={user.name} className="avatar" />
                                <span className="username">{user.name}</span>
                                <span className="time">{`${new Date(user.id).getUTCHours()}:${String(new Date(user.id).getUTCMinutes()).padStart(2, '0')}`}</span>
                            </li>
                        ))
                ) : (
                    <li className="no-users">No users available</li>
                )}
            </ul>
        </div>
    );
}