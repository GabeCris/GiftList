import React, { useState } from "react";
import { useModal } from "../../contexts/ModalContext";

const Modal = () => {
    const { showModal, changeModal } = useModal();
    return showModal ? (
        <div className="layout-modal">
            <div className="layout-modal-box">
                <h3 className="layout-modal-title">Atenção</h3>
                <p className="layout-modal-text">
                    A reserva neste website é apenas para controle e organização
                    dos noivos, não tendo relação com as lojas terceiras.
                </p>
                <button className="layout-button" onClick={changeModal}>
                    Entendi
                </button>
            </div>
        </div>
    ) : null;
};

export default Modal;
