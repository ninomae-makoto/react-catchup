import React from "react";
import styles from "./Header.module.css";

interface Props {
    children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
    return (
        <header>
            <h1>{children}</h1>
            <hr className={styles.divider} />
        </header>
    );
};

export default Header;
