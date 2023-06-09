'use client';
import React from 'react';
import { IconType } from 'react-icons';
import styles from './FrontCard.module.css'

const FrontCard: React.FC<{ jobName: string, Icon: IconType, active: boolean}> = ({ Icon, jobName, active }) => {
    return (
            <main className={`${styles.card__front} ${active && styles['card__front--active']}`}>
                <Icon className={styles.card__icon} />
                <h4 className={styles.card__title}>{jobName}</h4>
            </main>
    )
}

export { FrontCard };