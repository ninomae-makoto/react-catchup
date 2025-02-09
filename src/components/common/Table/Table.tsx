import React from "react";
import styles from "./Table.module.css";

interface DataRow {
    [key: string]: string | number | boolean;
}

// NOTE コンポーネントに渡されるプロパティ
interface TableProps {
    data: DataRow[];
    loading?: boolean;
}

/** テーブルコンポーネント */
const Table: React.FC<TableProps> = ({ data, loading }) => {
    // データがない場合はローディング表示
    if (data.length === 0) {
        return (
            <div className={styles["table-container"]}>
                <table
                    className={`${styles.table} ${
                        loading ? styles.skeleton : ""
                    }`}
                >
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>データがありません</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    // テーブルセルの表示
    const showCell = (cell: string | number | boolean) => {
        if (typeof cell === "boolean") {
            return cell ? "○" : "";
        }
        return cell;
    };

    // ヘッダー(キー)一覧
    const headers = Object.keys(data[0]) as Array<keyof DataRow>;

    return (
        <div className={styles["table-container"]}>
            <table
                className={`${styles.table} ${loading ? styles.skeleton : ""}`}
            >
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {headers.map((header) => (
                                <td key={header}>{showCell(row[header])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
