import React from 'react';
import styles from './TeamWorkSection.module.scss';


/**
 * The TeamWorkSection component represents a section that showcases teamwork and collaborations.
 * It displays team project cards with titles and descriptions.
 * The component uses CSS modules to style its elements.
 */
export const TeamWorkSection: React.FC = () => {
    return (
        <div className={styles.teamWorkSection}>
            <h2 className={styles.sectionTitle}>Teamwork and Collaborations</h2>
            {/* Render team project cards */}
            <div className={styles.teamProjectCard}>
                <h3 className={styles.projectTitle}>Web Application Redesign</h3>
                <p className={styles.projectDescription}>Worked with a team of developers and designers to redesign and improve a web application.</p>
                {/* Add more team project details */}
            </div>
            {/* Add more team project cards */}
        </div>
    );
};

