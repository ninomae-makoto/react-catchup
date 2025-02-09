import React, { useState } from "react";
import styles from "./TabMenu.module.css";

interface TabMenuProps {
    tabs: Array<{ label: string; Icon: React.FC }>;
    defaultTab?: string;
    onTabClick?: (tab: string) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, defaultTab, onTabClick }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        if (onTabClick) {
            onTabClick(tab);
        }
    };

    return (
        <div className={styles["tab-container"]}>
            <div className={styles["tabs-header"]}>
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        className={`${styles["tab-link"]} ${
                            tab.label === activeTab ? styles["show"] : ""
                        }`}
                        onClick={() => handleTabClick(tab.label)}
                    >
                        <span className={styles.icon}>
                            {/* <FormIcon size={16} color="green"></FormIcon> */}
                            <tab.Icon />
                        </span>
                        <div>{tab.label}</div>
                    </button>
                ))}
            </div>
            <hr className={styles.divider} />
        </div>
    );
};

export default TabMenu;
