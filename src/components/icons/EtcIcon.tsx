import React from "react";

interface IconProps {
    size?: number;
    color?: string;
}

const EtcIcon: React.FC<IconProps> = ({ size = 24, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            width={size}
            height={size}
            strokeWidth="2"
        >
            {" "}
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>{" "}
            <path d="M14 8h-4v8h4"></path> <path d="M10 12h2.5"></path>{" "}
        </svg>
    );
};

export default EtcIcon;
