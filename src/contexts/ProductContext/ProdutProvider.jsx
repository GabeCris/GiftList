import React, { useState } from "react";
import { ProductContext } from "./ProductContext";

function ProductProvider({ children }) {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("Cozinha");
    const [productPrice, setProductPrice] = useState(0);
    const [productUrl, setProductUrl] = useState("");
    const [productUrlImage, setProductUrlImage] = useState("");

    const clearInputs = () => {
        setProductName("");
        setProductCategory("Cozinha");
        setProductPrice("");
        setProductUrl("");
        setProductUrlImage("");
    };

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
                setProductUrlImage,
                clearInputs
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
