import React from 'react';
import styles from './PrimaryButton.module.scss'
import { IconType } from 'react-icons';

interface PrimaryButtonProps {
    onClick: () => void;
    label: string;
    style?: React.CSSProperties;
    icon?: IconType;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label, style = {}, icon: Icon }) => (
    <button onClick={onClick} className={styles.primaryButton} style={style} >
        {label} {Icon && <Icon className={styles.icon} />}
    </button>
);
