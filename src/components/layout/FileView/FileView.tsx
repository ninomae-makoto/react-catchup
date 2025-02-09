import React from "react";
import FileDragDrop from "../../common/FileDragDrop/FileDragDrop";
import { byteConvert } from "../../../utils/utils";
import styles from "./FileView.module.css";
import { formatDate } from "../../../utils/dateUtils";

const FileView: React.FC = () => {
    const [files, setFiles] = React.useState<File[]>([]);
    function handleFileDrop(acceptedFiles: File[]): void {
        console.log(acceptedFiles);
        setFiles(acceptedFiles);
    }

    return (
        <div className={styles.fileview}>
            <h1>File View</h1>
            <FileDragDrop onDrop={handleFileDrop} />

            {/* ファイル情報表示 */}
            <ul className={styles.fileinfo}>
                {files.map((file) => (
                    <li key={file.name}>
                        <ul>
                            <li>{file.name}</li>
                            <li>{byteConvert(file.size)}</li>
                            <li>
                                {formatDate(
                                    new Date(file.lastModified),
                                    "yyyy/MM/dd HH:mm:ss"
                                )}
                            </li>
                            <li>{file.type}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileView;
