import React, { useState } from "react";
// import "./ModalView.css"; // Import your CSS file for styling
import Modal from "../../common/Modal/Modal";

const ModalView: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        console.log("open modal");

        setIsOpen(true);
    };

    return (
        <div>
            <h1>Modal Example</h1>
            <button onClick={openModal}>Open Modal</button>
            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <p>This is a modal</p>
            </Modal>
        </div>
    );
};

export default ModalView;
