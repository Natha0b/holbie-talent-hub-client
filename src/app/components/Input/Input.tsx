import React, { useRef } from 'react';
import styles from './Input.module.scss'

interface InputProps {
    label?: string;
    value: string;
    onChange: (newValue: string) => void;
    type?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text"}) => {
    const id = useRef(Math.random().toString(16).slice(2)).current

    return (
        <div className={styles.input}>
            <input
                type={type}
                id={id}
                className={styles.input__field}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {label && <label htmlFor={id} className={`${value?.length > 0 ? styles['label--active'] : ''}`}>{label}</label>}
        </div>
    );
};

export { Input };
