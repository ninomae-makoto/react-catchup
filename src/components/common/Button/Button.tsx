import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    disabled = false,
}) => {
    return (
        <button
            type="button"
            className={styles["button-glass"]}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
