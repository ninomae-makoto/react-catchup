import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Textfield from "./../../common/Textfield/Textfield";
import {
    emailValidation,
    numberValidation,
    rangeValidation,
    requiredValidation,
} from "../../../utils/validationUtils";
import { fetcher } from "../../../utils/fetcher";
import { FormModel } from "../../../models/formModel";
import Button from "../../common/Button/Button";

interface FormProps {
    /** Loading切り替え時の処理 */
    onLoadingChange: (isLoading: boolean) => void;
}

const Form: React.FC<FormProps> = ({ onLoadingChange: onChangeLoading }) => {
    // フォーム初期化情報
    const initialFormData: FormModel = {
        name: "",
        tel: "",
        email: "",
        message: "",
    };
    // NOTE: Reactで管理する変数
    const [formData, setFormData] = useState<FormModel>(initialFormData);
    const [errors, setErrors] = useState<FormModel>({} as FormModel);

    // NOTE: Reactのイベントハンドラは、イベントオブジェクトを引数に取る。このサンプルにおいてコンポーネントのイベントハンドラはhandleXxxxで統一する。
    // フォーム変更時の処理
    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // NOTE: useEffectの第2引数に指定した変数が変更された時に第1引数の処理が実行される
    // フォームエラーチェック
    useEffect(() => {
        const newErrors: FormModel = {} as FormModel;

        newErrors.name = requiredValidation(formData.name);
        newErrors.tel = numberValidation(formData.tel);
        newErrors.email = requiredValidation(formData.email);
        if (newErrors.email === "") {
            newErrors.email = emailValidation(formData.email);
        }
        newErrors.message = rangeValidation(formData.message, 1, 100);

        setErrors(newErrors);
    }, [formData]);

    const hasError = Object.values(errors).some((error) => error !== "");

    // フォーム送信時の処理
    const handleSubmit = async () => {
        console.log("Form data submitted:", formData);

        onChangeLoading(true);

        const _formData = new FormData();
        _formData.append("name", formData.name);
        _formData.append("tel", formData.tel);
        _formData.append("email", formData.email);
        _formData.append("message", formData.message);

        const url = "https://httpbin.org/delay/2";
        fetcher(url, {
            method: "POST",
            body: _formData,
            contentType: "application/x-www-form-urlencoded",
        })
            .then((res) => {
                console.log("Form submission result:", res);
            })
            .catch((err) => {
                console.error("Form submission error:", err);
            })
            .finally(() => {
                onChangeLoading(false);
            });
    };

    return (
        <div>
            <h1>Form Example</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Textfield
                    label="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required={true}
                    error={errors.name}
                />
                <Textfield
                    label="tel"
                    value={formData.tel}
                    onChange={handleFormChange}
                    error={errors.tel}
                />
                <Textfield
                    label="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    error={errors.email}
                />
                <Textfield
                    label="message"
                    value={formData.message}
                    type="textarea"
                    onChange={handleFormChange}
                    error={errors.message}
                />

                <div className={styles.button}>
                    <Button onClick={handleSubmit} disabled={hasError}>
                        送信
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Form;
