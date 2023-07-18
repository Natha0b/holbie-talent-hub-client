import React from 'react';
import styles from './ProjectSection.module.scss';

/**
 * The ProjectSection component represents a section that displays a list of projects.
 * It renders the section title and project cards.
 * The component uses CSS modules to style its elements.
 */
export const ProjectSection: React.FC = () => {
    return (
        <div className={styles.projectSection}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            {/* Render project cards */}
            <div className={styles.projectCard}>
                <h3 className={styles.projectTitle}>E-commerce Website</h3>
                <p className={styles.projectDescription}>Developed a responsive e-commerce website using React and Node.js.</p>
                {/* Add more project details */}
            </div>
            {/* Add more project cards */}
        </div>
    );
};

