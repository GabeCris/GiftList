import React, { useState } from "react";
import { ProductContext } from "./ProductContext";

function ProductProvider({ children }) {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("Cozinha");
  const [productPrice, setProductPrice] = useState(0);
  const [productUrl, setProductUrl] = useState("");
  const [productUrlImage, setProductUrlImage] = useState("");
  const [productStatus, setProductStatus] = useState("available");
  const [productHighlight, setProductHighlight] = useState(false);

  const clearInputs = () => {
    setProductName("");
    setProductCategory("Cozinha");
    setProductPrice("");
    setProductUrl("");
    setProductUrlImage("");
    setProductHighlight(false);
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
        productStatus,
        setProductStatus,
        clearInputs,
        productHighlight,
        setProductHighlight,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
