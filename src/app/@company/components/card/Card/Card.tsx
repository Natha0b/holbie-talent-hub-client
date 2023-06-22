'use client';
import React, { useRef } from 'react';
import { FrontCard } from '$/app/@company/components/card/FrontCard/FrontCard';
import { BackCard } from '$/app/@company/components/card/BackCard/BackCard';
import { TechCard } from '$/app/@company/components/card/TechCard/TechCard';
import { EnglishCard } from '$/app/@company/components/card/EnglishCard/EnglishCard';
import { JobCard } from '$/app/@company/components/card/JobCard/JobCard';
import { ButtonSubmit } from '$/app/@company/components/card/ButtonSubmit/ButtonSubmit';
import styles from './Card.module.scss';
import { useCardState } from '$components/hooks/useCardState';


/**
 * The Card component represents a card containing information about a job.
 * It includes a front card and a back card.
 * When hovered or clicked, it toggles the active state of the card.
 */
const Card: React.FC<{ kindJob: string; jobName: string; icon: string; }> = ({
  kindJob,
  icon,
  jobName,
}) => {
  
  const { active, activeShow, cardRef } = useCardState('group-profiles');

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${active && styles['card--active']}`}
      onMouseEnter={activeShow}
      onClick={activeShow}
      
    >
      <FrontCard icon={icon} jobName={jobName} active={active} />
      <BackCard kindJob={kindJob} active={active} />
    </article>
  );
};

export { Card };
