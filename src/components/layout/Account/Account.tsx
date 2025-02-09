import React, { useState } from "react";
import styles from "./Account.module.css";

const Account: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles["account"]}>
            <div className={styles["account-icon"]} onClick={toggleMenu}>
                A
            </div>
            <div
                className={`${styles["account-menu"]} ${
                    isActive ? styles["active"] : ""
                }`}
            >
                <ul>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default Account;
