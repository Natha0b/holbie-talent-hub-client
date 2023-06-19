import React from 'react';
import styles from './TextArea.module.scss'

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({label, value, onChange}) => {
  return (
    <div className={styles.textarea}>
      <label htmlFor="">{label}</label>
      <textarea
        className={styles.textarea__field}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export { TextArea };
