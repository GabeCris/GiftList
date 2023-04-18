import React from "react";
import { useState } from "react";

const Popup = ({ children, externalFunction }) => {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);
  const [title, text] = children.split(", ");

  return (
    showModal && (
      <div className="layout-modal">
        <div className="layout-modal-box">
          <h3 className="layout-modal-title">{title}</h3>
          <p className="layout-modal-text">{text}</p>
          <div className="layout-modal-buttons">
            <button onClick={closeModal}>Não</button>
            <button onClick={externalFunction}>Sim</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
