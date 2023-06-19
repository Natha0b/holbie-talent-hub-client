import React from 'react';
import styles from './ActionButton.module.scss'

interface ActionButtonProps {
  onClick: () => void;
  label: string;
  variant: "danger" | "warning" | "success";
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, variant }) => (
  <button onClick={onClick} className={`${styles.actionButton} ${styles[variant]}`}>
    {label}
  </button>
);

export { ActionButton };
