"use client";
import React from 'react';
import styles from './RadioButton.module.scss'

interface RadioButtonProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className={styles.radio}>
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={styles['radio__input']}
        />
        <label htmlFor="">{label}</label>
    </div>
  );
};

export { RadioButton };
