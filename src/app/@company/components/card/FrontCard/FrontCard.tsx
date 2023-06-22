'use client';
import React from 'react';
import styles from './FrontCard.module.scss';

/**
 * The FrontCard component represents the front side of a card.
 * It displays the job name and icon.
 * The active prop determines if the card is active or not.
 */
const FrontCard: React.FC<{ jobName: string; icon: string; active: boolean }> = ({ jobName, icon, active }) => {
    return (
        <main className={`${styles.card__front} ${active && styles['card__front--active']}`}>
            <img src={icon} alt={jobName} className={styles.card__icon} />
            <h4 className={styles.card__title}>{jobName}</h4>
        </main>
    );
};

export { FrontCard };