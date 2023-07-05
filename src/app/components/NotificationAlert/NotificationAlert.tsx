'Use client';
import React from 'react';
import styles from './NotificationAlert.module.scss'
import { useEasy } from 'use-easy';

export interface NotificationItem {
    type: 'info' | 'success' | 'warning' | 'danger';
    message: string;
}

export interface NotificationAlert {
    notifications: NotificationItem[];
}

const NotificationAlert: React.FC = () => {
    //@ts-ignore
    const { state: { notifications } } = useEasy({ initial: {notifications: []} as NotificationAlert} );
    
    
    return (
        <div className={styles['alert-wrapper']}>
            {
                (notifications as NotificationItem[]).map((notification, index) => (
                    <div key={index} className={`${styles.alert} ${styles[`alert-${notification.type}`]}`}>
                        {notification.message}
                    </div>
                ))
            }
        </div>
    );
};
export { NotificationAlert };
