import React from 'react';
import styles from './EducationSection.module.scss';

/**
 * The EducationSection component represents a section for displaying education information.
 * It renders a title "Education" and education cards with details such as degree, university, and date.
 * Additional education cards can be added.
 */
export const EducationSection: React.FC = () => {
  return (
    <div className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Education</h2>
      {/* Render education cards */}
      <div className={styles.educationCard}>
        <h3 className={styles.degree}>Bachelor of Science in Computer Science</h3>
        <p className={styles.university}>XYZ University</p>
        <p className={styles.date}>2015 - 2019</p>
      </div>
      {/* Add more education cards */}
    </div>
  );
};