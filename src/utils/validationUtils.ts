// NOTE: バリデーション関数をまとめたファイル

// NOTE: 昨今のトレンドだとクラスを使用せずに関数を使うことが多い。importを絞ってファイルの軽量化を図るため。

/**
 * バリデーション関数の型定義
 * 引数を一つとりエラーメッセージを返す。エラーがない場合は空文字。
 */
type ValidationFunction = (value: string) => string;

export const requiredValidation: ValidationFunction = (value: string) => {
    if (!value) {
        return "This field is required.";
    }
    return "";
};

/**
 * email用バリデーション関数
 * @param value バリデーション対象文字列
 * @returns エラーメッセージ or ""
 */
export const emailValidation: ValidationFunction = (value: string) => {
    if (value === "") {
        return "";
    }
    if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
        return "Please enter a valid email address.";
    }
    return "";
};

/**
 * 数値用バリデーション関数
 * @param value バリデーション対象文字列
 * @returns エラーメッセージ or ""
 */
export const numberValidation = (value: string) => {
    if (!value.match(/^[0-9]*$/)) {
        return "Please enter only numbers.";
    }
    return "";
};

/**
 * 文字数バリデーション関数
 * @param value バリデーション対象文字列
 * @param min 最小文字数。nullの場合は無視。
 * @param max 最大文字数。nullの場合は無視。
 * @returns エラーメッセージ or ""
 */
export const rangeValidation = (
    value: string,
    min: number | null = null,
    max: number | null = null
) => {
    if (value === "") {
        return "";
    }
    if (min && value.length < min) {
        return `Please enter at least ${min} characters.`;
    }
    if (max && value.length > max) {
        return `Please enter up to ${max} characters.`;
    }
    return "";
};
