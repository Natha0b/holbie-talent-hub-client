import React from 'react';
import styles from './SkillSection.module.scss';

/**
 * The SkillSection component represents a section that displays skills.
 * It renders a list of skill tags.
 * The component uses CSS modules to style its elements.
 */
export const SkillSection: React.FC = () => {
    return (
        <div className={styles.skillSection}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            {/* Render skill tags */}
            <div className={styles.skillTag}>HTML</div>
            <div className={styles.skillTag}>CSS</div>
            <div className={styles.skillTag}>JavaScript</div>
            {/* Add more skill tags */}
        </div>
    );
};

