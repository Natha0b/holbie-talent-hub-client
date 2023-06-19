import React from 'react';
import styles from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
  onClick: () => void;
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label }) => (
  <button onClick={onClick} className={styles.primaryButton}>
    {label}
  </button>
);

export { PrimaryButton };
