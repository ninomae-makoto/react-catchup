import React from "react";

interface SpacerProps {
    size?: 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64;
}

const Spacer: React.FC<SpacerProps> = ({ size = 8 }) => {
    return <div style={{ height: `${size}px`, width: `${size}px` }} />;
};

export default Spacer;
