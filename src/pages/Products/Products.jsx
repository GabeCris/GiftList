import React from "react";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import ShelfProduct from "../../components/ShelfProduct";
import { ModalProvider } from "../../contexts/ModalContext";

const Products = () => {
    return (
        <ModalProvider>
            <Layout>
                <Filter />
                <section className="products-container">
                    <ShelfProduct type={"Reservated"}/>
                    <ShelfProduct />
                    <ShelfProduct />
                    <ShelfProduct type={"Wish"}/>
                    <ShelfProduct type={"Reservated"}/>
                    <ShelfProduct />
                    <span className="shadow"></span>
                </section>
                <section className="info-button">
                    <p>
                        <b>Total:</b> 6 produtos encontrados
                    </p>
                    <Button url={"filter"} logout></Button>
                </section>
            </Layout>
        </ModalProvider>
    );
};

export default Products;
