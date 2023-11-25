import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import useReserve from "../../hooks/useReserve/useReserve";
import formatPrice from "../../utils/formatPrice/FormatPrice";
import { useClipBoard } from "react-copy-to-clipboard";

import Button from "../Button";
import { GiftIcon, GiftOpenIcon } from "../Icons";
import { useUser } from "../../contexts/UserContext";

const ShelfPix = ({ props }) => {
  const [copied, setCopied] = useState(false);
  const { openModal } = useModal();
  const { changeReserve } = useReserve();

  const textToCopy = "13487127911";

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Erro ao copiar para a área de transferência:", error);
      });
  };

  return (
    <div className={`shelfProduct ${"shelfProduct-reserved"}`}>
      <div className="shelfProduct-box-image">
        <img
          src="./assets/icon-pix.svg"
          className="shelfProduct-image"
          alt={""}
        />
      </div>
      <h2 className="shelfProduct-name">Nos envie um:</h2>
      <p className="shelfProduct-price">PIX</p>
      <Button
        label="Ver Chave"
        external={true}
        onClick={() =>
          openModal("pix-info", () => {
            handleCopyClick();
          })
        }
      />
    </div>
  );
};

export default ShelfPix;
