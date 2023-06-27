// ExperienceSection.tsx
import React from 'react';
import styles from './ExperienceSection.module.scss';

/**
 * The ExperienceSection component represents a section for displaying experience information.
 * It renders a title "Experience" and experience cards with details such as position, company, date, and description.
 * Additional experience cards can be added.
 */
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

