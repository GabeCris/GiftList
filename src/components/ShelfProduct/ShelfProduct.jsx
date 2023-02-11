import React from "react";
import Button from "../Button";

const ShelfProduct = () => {
    const srcImage =
        "https://www.havan.com.br/media/catalog/product/cache/b23e5304d11dff00750c3e92e4b038fa/t/o/toalha-de-rosto-toscana-havan_604489.jpg";
    const name = "Toalha de rosto";
    const price = 59.46;

    return (
        <div className="shelfProduct">
            <img src={srcImage} className="shelfProduct-image" />
            <h2 className="shelfProduct-name">{name}</h2>
            <p className="shelfProduct-price">R${price}</p>
            <Button label="Ver no site" />
        </div>
    );
};

export default ShelfProduct;
