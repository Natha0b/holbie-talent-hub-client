

import React from 'react';
import styles from './SkillSection.module.scss';

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

