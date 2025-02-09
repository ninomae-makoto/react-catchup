import React, { useState } from "react";
import styles from "./FileDragDrop.module.css";

interface FileDragDropProps {
    onDrop: (acceptedFiles: File[]) => void;
}

const FileDragDrop: React.FC<FileDragDropProps> = ({ onDrop }) => {
    const [isDragOver, setIsDragOver] = useState(false);

    // ファイルをドロップしたときの処理
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragOver(false);
        const files = Array.from(event.dataTransfer.files);
        onDrop(files);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    // ファイルを選択したときの処理
    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        onDrop(files);
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`${styles.dropzone} ${
                isDragOver ? styles.dragover : ""
            }`}
        >
            <input
                type="file"
                multiple
                onChange={handleFileSelect}
                style={{ display: "none" }}
                id="fileInput"
            />
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                <p>Drag and drop files here, or click to select files</p>
            </label>
        </div>
    );
};

export default FileDragDrop;
