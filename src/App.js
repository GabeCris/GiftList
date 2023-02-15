import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./pages/Filter";
import InitialPage from "./pages/InitialPage";
import ProductRegistration from "./pages/ProductRegistration/ProductRegistration";
import Products from "./pages/Products/Products";
import "./styles/global.scss";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialPage />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/productRegistration" element={<ProductRegistration />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
