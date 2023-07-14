"use client";
import React from 'react';
import styles from './NotificationAlert.module.scss'
import { useEasy } from 'use-easy';

export interface NotificationItem {
    type: 'info' | 'success' | 'warning' | 'danger';
    message: string;
}

export interface NotificationAlertInterface {
    notifications: NotificationItem[];
}


const NotificationAlert: React.FC = () => {
    const { state: { notifications } } = useEasy({ initial: { notifications: [] } as NotificationAlertInterface });

    return (
        <div className={styles['alert-wrapper']}>
            {
                Array.isArray(notifications) && notifications.at(0) != null && (notifications as NotificationItem[]).map((notification, index) => (
                    <div key={index} className={`${styles.alert} ${styles[`alert-${notification.type}`]}`}>
                        {notification.message}
                    </div>
                ))
            }
        </div >
    );
};
export { NotificationAlert };
