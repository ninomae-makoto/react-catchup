import React from "react";
import modules from "./Textfield.module.css";

/** コンポーネント利用時のプロパティ */
interface TextfieldProps {
    label: string;
    value: string;
    /** text, number, password, email, etc. */
    type?: "text" | "number" | "password" | "email" | "textarea";
    /** 入力変更時の処理 */
    onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    /** エラーメッセージ */
    error?: string;
    /** 必須項目かどうか */
    required?: boolean;
}

/**
 * テキストフィールドコンポーネント
 * @example
 * const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {}
 * <Textfield label="name" value={name} onChange={handleChange} />
 */
const Textfield: React.FC<TextfieldProps> = ({
    label,
    value,
    type,
    onChange,
    error,
    required = false,
}) => {
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        onChange(event);
    };

    type = type || "text";
    let input = (
        <input name={label} type={type} value={value} onChange={handleChange} />
    );
    // textareaの場合は専用タグ
    if (type === "textarea") {
        input = (
            <textarea
                name={label}
                value={value}
                onChange={handleChange}
            ></textarea>
        );
    }

    return (
        <div className={modules.textfield}>
            <label htmlFor={label}>
                {label}
                {required && <span className={modules.required}> ※</span>}
                {input}
            </label>
            {/* エラー表示 */}
            {error && <div className={modules.error}>{error}</div>}
        </div>
    );
};

export default Textfield;
