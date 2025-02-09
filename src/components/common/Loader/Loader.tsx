import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
    children?: React.ReactNode;
}

/**
 * 読み込み中コンポーネント
 */
const Loader: React.FC<LoaderProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <span className={styles.loader}>{children}</span>
        </div>
    );
};

export default Loader;
