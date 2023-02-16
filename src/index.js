import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "./contexts/FilterContext";
import { ProductProvider } from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ProductProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </ProductProvider>
    </React.StrictMode>
);
