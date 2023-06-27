"use client";
import React from 'react';
import styles from './Checkbox.module.scss'

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked,
    onChange,
}) => {
    return (
        <div className={styles.checkbox}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className={styles['checkbox__input']}
            />
            <label htmlFor="">{label}</label>
        </div>
    );
};

export { Checkbox };
