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
     {/* 
      <JobCard />
      <TechCard />
      <EnglishCard />
      <ButtonSubmit /> */}
    </article>
  );
};

export { Card };




/*'use client';
import React, { useEffect, useRef } from 'react';
import { IconType } from 'react-icons';
import { FrontCard } from '$components/card/FrontCard/FrontCard'
import { BackCard } from '$components/card/BackCard/BackCard'
import { TechCard } from '$components/card/TechCard/TechCard';
import { EnglishCard } from '$components/card/EnglishCard/EnglishCard';
import { JobCard } from '$components/card/JobCard/JobCard';
import { ButtonSubmit } from '$components/card/ButtonSubmit/ButtonSubmit';
import styles from './Card.module.scss';
import { useState } from 'react';


const Card: React.FC<{ kindJob: string, jobName: string, icon: string; }> = ({ kindJob, icon, jobName }) => {

    const [active, setActive] = useState(false);
    const card = useRef<HTMLElement | null>(null);
    const onclick:React.MouseEventHandler<HTMLElement>= () => {
        setActive(true);
    };
    const onmouseenter:React.MouseEventHandler<HTMLElement>= () => {
        setActive(true);
    };
    const hasUseReferenceAncestor = (element: HTMLElement): boolean => {
        let parent = element.parentElement;
    
        while (parent) {
          if (parent === card.current) {
            return true;
          }
          parent = parent.parentElement;
        }
    
        return false;
      };
      useEffect(() => {
        const handleClick = (event: MouseEvent) => {
          const { target } = event;
    
          if (!hasUseReferenceAncestor(target as HTMLElement)) {
            setActive(false);
          }
        };
    
        document.body.addEventListener('click', handleClick);
    
        return () => {
          document.body.removeEventListener('click', handleClick);
        };
      }, []);
    return (
            <article ref={card} className={`${styles.card} ${active && styles['card--active']}`} onClick={onclick} onMouseEnter={onmouseenter}>
                <FrontCard icon={icon} jobName={jobName} active={active} />
                <BackCard kindJob={kindJob} active={active} />
                <JobCard />
                <TechCard />
                <EnglishCard />
                <ButtonSubmit />
            </article>
    )
}

export { Card };
*/