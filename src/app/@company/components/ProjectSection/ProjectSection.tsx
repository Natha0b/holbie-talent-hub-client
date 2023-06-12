
import React from 'react';
import styles from './ProjectSection.module.scss';

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

