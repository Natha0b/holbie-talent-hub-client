import React from 'react';
import styles from './SuccessButton.module.scss'

interface SuccessButtonProps {
    onClick: () => void;
    label: string;
    style?: React.CSSProperties
}

export const SuccessButton: React.FC<SuccessButtonProps> = ({ onClick, label, style = {} }) => (
    <button onClick={onClick} className={styles.successButton} style={style}>
        {label}
    </button>
);