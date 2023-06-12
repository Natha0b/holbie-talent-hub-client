// ExperienceSection.tsx

import React from 'react';
import styles from './ExperienceSection.module.scss';

export const ExperienceSection: React.FC = () => {
  return (
    <div className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      {/* Render experience cards */}
      <div className={styles.experienceCard}>
        <h3 className={styles.position}>Web Developer</h3>
        <p className={styles.company}>ABC Company</p>
        <p className={styles.date}>Jan 2019 - Present</p>
        <p className={styles.description}>Responsible for developing and maintaining web applications.</p>
      </div>
      {/* Add more experience cards */}
    </div>
  );
};

