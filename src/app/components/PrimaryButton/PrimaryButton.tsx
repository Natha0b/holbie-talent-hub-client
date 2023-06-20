import React from 'react';
import styles from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
  onClick: () => void;
  label: string;
  style?: React.CSSProperties;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label, style = {} }) => (
  <button onClick={onClick} className={styles.primaryButton} style={style} >
    {label}
  </button>
);

