import React from 'react';
import styles from './SecondaryButton.module.scss'

interface SecondaryButtonProps {
  onClick: () => void;
  label: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick} className={styles.secondaryButton}>
    {label}
  </button>
);

export { SecondaryButton };
