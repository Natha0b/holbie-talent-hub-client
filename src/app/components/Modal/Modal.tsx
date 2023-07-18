import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    );
};

export { Modal };
