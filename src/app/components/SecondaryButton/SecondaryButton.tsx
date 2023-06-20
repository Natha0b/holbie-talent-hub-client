import React from 'react';
import styles from './SecondaryButton.module.scss'

interface SecondaryButtonProps {
  onClick: () => void;
  label: string;
  style?: React.CSSProperties;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, label, style = {} }) => (
  <button onClick={onClick} className={styles.secondaryButton} style={style}>
    {label}
  </button>
);

export { SecondaryButton };
