'use client';
import React, { useState, useEffect } from 'react';
import styles from './FrontCard.module.scss';
import { Input } from '$/app/components/Input/Input';
import { Filters, initial } from '../BackCard/BackCard';
import { useEasy } from 'use-easy';

/**
 * The FrontCard component represents the front side of a card.
 * It displays the job name and icon.
 * The active prop determines if the card is active or not.
 */
const FrontCard: React.FC<{ jobName: string; icon: string; active: boolean; dynamic: boolean; filterKey: number }> = ({ jobName, icon, active, dynamic, filterKey }) => {

    const { state } = useEasy({ initial: { ...initial } });
    const  [job_name, setJobName] = useState(jobName);

    let iconAlt = jobName;
    if (iconAlt === '') {
        iconAlt = 'Job Name';
    }

    useEffect(() => {
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object')
            (state[index] as Filters).job_name = job_name as string;
    }, []);

    useEffect(() => {
        const index = `filter${filterKey}` as keyof typeof state;
        if (typeof state[index] === 'object' && job_name != "")
            (state[index] as Filters).job_name = job_name as string;
    }, [job_name]);

    return (
        <main className={`${styles.card__front} ${active && styles['card__front--active']}`}>
            <img src={icon} alt={iconAlt} className={styles.card__icon} />
            {dynamic 
                ? <Input label="Job Name" value={job_name} onChange={setJobName} />
                : <h4 className={styles.card__title}>{jobName}</h4>
            }
        </main>
    );
};

export { FrontCard };
