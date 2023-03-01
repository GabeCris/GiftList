import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import EditProduct from "./pages/EditProduct";
import Filter from "./pages/Filter";
import InitialPage from "./pages/InitialPage";
import ProductRegistration from "./pages/ProductRegistration/ProductRegistration";
import Products from "./pages/Products/Products";
import "./styles/global.scss";
import { ModalProvider } from "./contexts/ModalContext";
import User from "./pages/User";
import UserRegistration from "./pages/UserRegistration/UserRegistration";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ModalProvider>
                    <Routes>
                        <Route path="/" element={<InitialPage />} />
                        <Route path="/filter" element={<Filter />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/products" element={<Products />} />
                        <Route
                            path="/productRegistration"
                            element={<ProductRegistration />}
                        />
                        <Route
                            path="/userRegistration"
                            element={<UserRegistration />}
                        />
                        <Route path="/edit" element={<Edit />} />
                        <Route path="/edit/:id" element={<EditProduct />} />
                    </Routes>
                </ModalProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
