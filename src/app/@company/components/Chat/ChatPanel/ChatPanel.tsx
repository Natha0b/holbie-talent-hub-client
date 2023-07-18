"use client";
import React, { useRef, useState } from 'react';
import styles from './ChatPanel.module.scss';
import { AiFillMessage } from 'react-icons/ai';
import { useCardState } from '../../../../components/hooks/useCardState';
import { ChatUserList, IUser } from '../listchat/ChatUserList';
import { Chat } from '../chat/Chat';


export const ChatPanel: React.FC = () => {
    // Function to handle filter change


    const users: IUser[] = useRef([
        {
            id: Date.now() + 1,
            name: 'Juan Álvarez',
            avatar: 'https://st2.depositphotos.com/6462898/42885/i/450/depositphotos_428859678-stock-photo-facial-expression-portrait-delighted-good.jpg',
            lastSeen: '7 minutes ago',
        },
        {
            id: Date.now() + 2,
            name: 'María Arroyave',
            avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            lastSeen: '2 minutes ago',
        },
        {
            id: Date.now() + 3,
            name: 'Carlos Martínez',
            avatar: 'https://media.istockphoto.com/id/482907157/es/foto/primer-plano-de-hombre-sonriente-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=AvoN1EpBjiXt7FkYyRfozOxzd5E1sMtWPMI6CTSz41Y=',
            lastSeen: '5 minutes ago',
        },
        {
            id: Date.now() + 4,
            name: 'Samantha Pérez',
            avatar: 'https://www.mundopsicologos.com/site/article/53583/49488/el-poder-de-la-resiliencia-0_ai1.jpg',
            lastSeen: '3 minutes ago',
        },
        {
            id: Date.now() + 5,
            name: 'Elaia Gonzáles',
            avatar: 'https://better2you.com/wp-content/uploads/2016/05/resiliencia-y-su-importancia-euroresidentes.jpg',
            lastSeen: '9 minutes ago',
        }
    ]).current;
    const { active, activeShow, cardRef } = useCardState();
    const [selected, setSelected] = useState<number>(NaN);

    return (
        <div ref={cardRef as any} className={`${styles.filterPanel} ${active && styles['filterPanel--active']}`} onMouseOver={activeShow} onClick={activeShow} >
            {/* Experience filter */}
            <i className={styles.filterIcon}>
                <AiFillMessage />
            </i>
            <ChatUserList {...{ selected, setSelected, users }} />
            <div style={{ opacity: !Number.isNaN(selected) ? 1 : 0 }} >
                {!Number.isNaN(selected) && <Chat />}
            </div>
        </div>
    );
};
