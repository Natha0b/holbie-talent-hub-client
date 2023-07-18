// component used for filters
'use client';
import React from 'react';
import { FrontCard } from '../../../../@company/components/card/FrontCard/FrontCard';
import { BackCard } from '../../../../@company/components/card/BackCard/BackCard';
import styles from './Card.module.scss';
import { useCardState } from '../../../../components/hooks/useCardState';
import { ProfileFake } from '../../../../@company/(pages)/find/profile/page';


/**
 * The Card component represents a card containing information about a job.
 * It includes a front card and a back card.
 * When hovered or clicked, it toggles the active state of the card.
 */
const Card: React.FC<{ filterKey: number; profile: ProfileFake; icon: string; dynamic: boolean }> = ({
    icon,
    profile,
    dynamic = false,
    filterKey
}) => {

    const { active, activeShow, cardRef } = useCardState('group-profiles');

    return (
        <article
            ref={cardRef}
            className={`${styles.card} ${active && styles['card--active']}`}
            onMouseEnter={activeShow}
            onClick={activeShow}

        >
            <FrontCard filterKey={filterKey} icon={icon} jobName={profile.job_name} dynamic={dynamic} active={active} />
            <BackCard filterKey={filterKey} profile={profile} dynamic={dynamic} active={active} />
        </article>
    );
};

export { Card };