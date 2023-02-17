import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "./contexts/FilterContext";
import { ModalProvider } from "./contexts/ModalContext";
import { ProductProvider } from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ModalProvider>
            <ProductProvider>
                <FilterProvider>
                    <App />
                </FilterProvider>
            </ProductProvider>
        </ModalProvider>
    </React.StrictMode>
);
