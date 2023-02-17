import React from "react";
import { useModal } from "../../contexts/ModalContext";
import Button from "../Button";
import { GiftIcon, GiftOpenIcon } from "../Icons";

const ShelfProduct = ({ type }) => {
    const { changeModal } = useModal();

    const srcImage =
        "https://www.havan.com.br/media/catalog/product/cache/b23e5304d11dff00750c3e92e4b038fa/t/o/toalha-de-rosto-toscana-havan_604489.jpg";
    const name = "Toalha de rosto";
    const price = 59.46;

    return (
        <div className={`shelfProduct ${type && "shelfProduct" + type}`}>
            {type !== "Wish" && type !== "Reservated" ? (
                <div
                    className="giftBox giftBoxAnimated"
                    onClick={() => changeModal("reservated")}
                >
                    <GiftOpenIcon />
                </div>
            ) : (
                <div className="giftBox">
                    <GiftIcon />
                </div>
            )}
            <img src={srcImage} className="shelfProduct-image" />
            <h2 className="shelfProduct-name">{name}</h2>
            <p className="shelfProduct-price">R${price}</p>
            {!type && <Button label="Ver no site" />}
            {type === "Reservated" && <Button label="Reservado" />}
            {type === "Wish" && <Button label="Desfazer" />}
        </div>
    );
};

export default ShelfProduct;
