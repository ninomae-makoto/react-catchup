// 未分類のユーティリティ関数を定義する

/**
 * byte変換関数
 * @param {number} bytes - バイト数
 * @returns {string} - 変換後の文字列
 * */
export const byteConvert = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};
