import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "./contexts/FilterContext";
import { ProductProvider } from "./contexts/ProductContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ProductProvider>
            <UserProvider>
                <FilterProvider>
                    <App />
                </FilterProvider>
            </UserProvider>
        </ProductProvider>
    </React.StrictMode>
);
