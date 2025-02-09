import React from "react";

interface IconProps {
    size?: number;
    color?: string;
}

const ModalIcon: React.FC<IconProps> = ({ size = 24, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            width={size}
            height={size}
            strokeWidth="2"
        >
            {" "}
            <path d="M8 8h8v8h-8z"></path>{" "}
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>{" "}
        </svg>
    );
};

export default ModalIcon;
