import React from "react";
import modules from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    // if (!isOpen) return null;

    return (
        <div
            className={`${modules["modal-wrapper"]} ${
                isOpen ? modules["modalactive"] : ""
            }`}
            onClick={onClose}
        >
            <div
                className={modules["modal-window"]}
                onClick={(e) => e.stopPropagation()}
            >
                <div id="contents" className={modules["modal-content"]}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
