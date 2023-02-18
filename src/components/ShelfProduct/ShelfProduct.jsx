import React, { useCallback } from "react";
import { useModal } from "../../contexts/ModalContext";
import useReserve from "../../hooks/useReserve/useReserve";
import formatPrice from "../../utils/formatPrice/FormatPrice";

import Button from "../Button";
import { GiftIcon, GiftOpenIcon } from "../Icons";

const ShelfProduct = ({ props }) => {
    const { changeModal } = useModal();
    const { changeReserve } = useReserve();

    console.log(props.id);
    const changeButton = () => {
        switch (props.status) {
            case "available":
                return (
                    <Button
                        label="Ver no site"
                        external={true}
                        url={props.productUrl}
                    />
                );
            case "unavailable":
                return <Button label="Reservado" />;
            case "reserved":
                return (
                    <Button label="cancelar" onClick={() => cancelReserve()} />
                );
        }
    };

    const changeGiftIcon = () => {
        switch (props.status) {
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
                return (
                    <div className="giftBox">
                        <GiftIcon />
                    </div>
                );
        }
    };

    const makeReserve = () => {
        changeModal("reserve");
        changeReserve("", props.id);
    };

    const cancelReserve = () => {
        changeModal("cancelReserve");
        changeReserve("500", props.id);
    };

    return (
        <div className={`shelfProduct ${"shelfProduct-" + props.status}`}>
            {changeGiftIcon()}
            <div className="shelfProduct-box-image">
                <img
                    src={props.productUrlImage}
                    className="shelfProduct-image"
                />
            </div>
            <h2 className="shelfProduct-name">{props.productName}</h2>
            <p className="shelfProduct-price">
                {formatPrice(props.productPrice)}
            </p>
            {changeButton()}
        </div>
    );
};

export default ShelfProduct;
