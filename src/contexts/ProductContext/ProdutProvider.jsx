import React, { useState } from "react";
import { ProductContext } from "./ProductContext";

function ProductProvider({ children }) {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("Cozinha");
    const [productPrice, setProductPrice] = useState(0);
    const [productUrl, setProductUrl] = useState("");
    const [productUrlImage, setProductUrlImage] = useState("");

    return (
        <ProductContext.Provider
            value={{
                productName,
                setProductName,
                productCategory,
                setProductCategory,
                productPrice,
                setProductPrice,
                productUrl,
                setProductUrl,
                productUrlImage,
                setProductUrlImage
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
