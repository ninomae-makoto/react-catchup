/**
 * 日付をフォーマットする
 * @param date
 * @param format "yyyy/MM/dd HH:mm:ss"など
 * @returns
 */
export const formatDate = (
    date: Date,
    format: string = "yyyy/MM/dd"
): string => {
    const padZero = (num: number): string => num.toString().padStart(2, "0");

    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1); // 月は0始まりのため+1
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    // フォーマット文字列を置換
    return format
        .replace("yyyy", year.toString())
        .replace("MM", month)
        .replace("dd", day)
        .replace("HH", hours)
        .replace("mm", minutes)
        .replace("ss", seconds);
};
