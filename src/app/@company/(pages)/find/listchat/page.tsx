'use client';
import React from 'react';
import './ChatUserList.css';

interface IUser {
    id: number;
    name: string;
    avatar: string;
    lastSeen: string;
}

interface ChatUserListProps {
    users: IUser[];
}

const ChatUserList: React.FC<ChatUserListProps> = ({ users }) => {
    return (
        <div className="chat-user-list">
            <h3>Chats</h3>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id} className="chat-user">
                            <img src={user.avatar} alt={user.name} className="avatar" />
                            <span className="username">{user.name}</span>
                            <span> {(new Date(user.name)).getUTCHours()+ ":" + (new Date(user.name)).getUTCMinutes()}</span>
                            {/*<span className="last-seen">Last seen: {user.lastSeen}</span>*/}
                            {/*<span className="available">Online: {user.available}</span>*/}
                        </li>
                    ))
                ) : (
                    <li className="no-users">No hay usuarios disponibles</li>
                )}
            </ul>
        </div>
    );
}

const App: React.FC = () => {
    const users: IUser[] = [
        {
            id: 1,
            name: 'Juan Álvarez',
            avatar: 'https://st2.depositphotos.com/6462898/42885/i/450/depositphotos_428859678-stock-photo-facial-expression-portrait-delighted-good.jpg',
            lastSeen: '7 minutes ago',
        },
        {
            id: 2,
            name: 'María Arroyave',
            avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            lastSeen: '2 minutes ago',
        },
        {
            id: 3,
            name: 'Carlos Martínez',
            avatar: 'https://media.istockphoto.com/id/482907157/es/foto/primer-plano-de-hombre-sonriente-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=AvoN1EpBjiXt7FkYyRfozOxzd5E1sMtWPMI6CTSz41Y=',
            lastSeen: '5 minutes ago',
        },
        {
            id: 4,
            name: 'Samantha Pérez',
            avatar: 'https://www.mundopsicologos.com/site/article/53583/49488/el-poder-de-la-resiliencia-0_ai1.jpg',
            lastSeen: '3 minutes ago',
        },
        {
            id: 5,
            name: 'Elaia Gonzáles',
            avatar: 'https://better2you.com/wp-content/uploads/2016/05/resiliencia-y-su-importancia-euroresidentes.jpg',
            lastSeen: '9 minutes ago',
        }
    ];

    return (
        <div>
            <ChatUserList users={users} />
        </div>
    );
}

export default App;