import React from "react";

interface IconProps {
    size?: number;
    color?: string;
}

const TableIcon: React.FC<IconProps> = ({ size = 24, color = "black" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 14 14"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M2 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M1 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.75 1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM4 7a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 4 7m.75 3.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"
                clipRule="evenodd"
            />
        </svg>
        // <svg
        //     width={size}
        //     height={size}
        //     viewBox="0 0 24 24"
        //     fill="none"
        //     xmlns="http://www.w3.org/2000/svg"
        // >
        //     <path
        //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
        //         fill={color}
        //     />
        // </svg>
    );
};

export default TableIcon;
