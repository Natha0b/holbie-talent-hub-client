import React from 'react';
import styles from './TalentPreview.module.scss';

export const TalentPreview: React.FC<{ talent: Talent }> = ({ talent }) => {
  return (
    <div className={styles.talentPreview}>
        <header>
      <figure>
        <img src={talent.profilePicture} alt="Profile" className="talent-img" />
      </figure>
      <h2>{talent.name}</h2>
    </header>
    <main>
      <div className={styles.talentInfo}>
        <p>{talent.title}</p>
        {/* Display other relevant information */}
      </div>
      {/* Add additional UI elements and interactions */}

    </main>
    </div>
  );
};

export interface Talent {
  profilePicture: string;
  name: string;
  title: string;
    // Add additional properties
}
