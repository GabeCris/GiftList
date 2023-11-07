import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import useReserve from "../../hooks/useReserve/useReserve";
import formatPrice from "../../utils/formatPrice/FormatPrice";
import { useClipBoard } from "react-copy-to-clipboard";

import Button from "../Button";
import { GiftIcon, GiftOpenIcon } from "../Icons";
import { useUser } from "../../contexts/UserContext";

const ShelfProduct = ({ props }) => {
  const [copied, setCopied] = useState(false);
  const { openModal } = useModal();
  const { changeReserve } = useReserve();
  const userId = localStorage.getItem("userId");

  const textToCopy = "83209350";

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

  const checkUserId = () => {
    return props.userId === userId;
  };

  const changeButton = () => {
    switch (props.productStatus || props.status) {
      case "available":
        return (
          <Button label="Ver no site" external={true} url={props.productUrl} />
        );
      case "unavailable":
        return <Button label="Reservado" />;
    }
  };

  const changeGiftIcon = () => {
    switch (props.productStatus || props.status) {
      case "available":
        return (
          <div
            className="giftBox giftBoxAnimated"
            onClick={() => makeReserve()}
          >
            <GiftOpenIcon />
          </div>
        );
      default:
        return checkUserId() ? (
          <div className="giftBox" onClick={() => cancelReserve()}>
            <GiftIcon />
          </div>
        ) : (
          <div className="giftBox">
            <GiftIcon />
          </div>
        );
    }
  };

  const makeReserve = () => {
    openModal(
      "reserve",

      () => changeReserve(userId, props.id, "unavailable")
    );
  };

  const cancelReserve = () => {
    openModal(
      "cancelReserve",

      () => {
        changeReserve("", props.id, "available");
      }
    );
  };

  return (
    <div
      className={`shelfProduct ${
        !checkUserId()
          ? "shelfProduct-" + props.productStatus
          : "shelfProduct-reserved"
      }`}
    >
      {props.productHighlight && (
        <span className="shelfProduct-highlight">Importante</span>
      )}
      {changeGiftIcon()}
      <div className="shelfProduct-box-image">
        <img
          src={props.productUrlImage}
          className="shelfProduct-image"
          alt={props.productName}
        />
      </div>
      <h2 className="shelfProduct-name">{props.productName}</h2>
      <p className="shelfProduct-price">{formatPrice(props.productPrice)}</p>
      {!checkUserId() ? (
        changeButton()
      ) : (
        <>
          <Button label="Ver no site" external={true} url={props.productUrl} />
          <Button
            secondary={true}
            label="Endereço de entrega"
            external={true}
            onClick={() =>
              openModal("shipping-info", () => {
                handleCopyClick();
              })
            }
          />
        </>
      )}
    </div>
  );
};

export default ShelfProduct;
