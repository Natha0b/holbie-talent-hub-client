'use client';
import React, {useState} from 'react';
import styles from './FrontCard.module.scss';
import { Input } from '$/app/components/Input/Input';

/**
 * The FrontCard component represents the front side of a card.
 * It displays the job name and icon.
 * The active prop determines if the card is active or not.
 */
const FrontCard: React.FC<{ jobName: string; icon: string; active: boolean; dynamic: boolean }> = ({ jobName, icon, active, dynamic }) => {

    const  [value, setValue] = useState('');

    let iconAlt = jobName;
    if (iconAlt === '') {
        iconAlt = 'Job Name';
    }

    return (
        <main className={`${styles.card__front} ${active && styles['card__front--active']}`}>
            <img src={icon} alt={iconAlt} className={styles.card__icon} />
            {dynamic 
            ? <Input label="Job Name" value={value} onChange={setValue} />
            : <h4 className={styles.card__title}>{jobName}</h4>
}
        </main>
    );
};

export { FrontCard };
