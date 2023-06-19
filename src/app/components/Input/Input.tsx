import React from 'react';
import styles from './Input.module.scss'

interface InputProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({label, value, onChange}) => {
  return (
    <div className={styles.input}>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        className={styles.input__field}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export { Input };
