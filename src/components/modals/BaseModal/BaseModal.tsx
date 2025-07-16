// src/components/modals/BaseModal.tsx
import React from 'react';
import styles from './BaseModal.module.scss'; // Импорт SCSS модуля

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const BaseModal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button
                    onClick={onClose}
                    className={styles.closeButton}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};