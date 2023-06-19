import React from 'react';
import styles from './Alert.module.scss'

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'danger';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => (
  <div className={`${styles.alert} ${styles[`alert-${type}`]}`}>
    {message}
  </div>
);

export { Alert };
