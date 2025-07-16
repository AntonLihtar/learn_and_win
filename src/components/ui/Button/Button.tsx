// src/components/ui/Button/Button.tsx
import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | 'red';
};

export const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};