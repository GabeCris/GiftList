import React from "react";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import ShelfProduct from "../../components/ShelfProduct";

const Products = () => {
    return (
        <Layout>
            <Filter />
            <section className="products-container">
                <ShelfProduct />
                <ShelfProduct />
                <ShelfProduct />
                <ShelfProduct />
                <ShelfProduct />
                <ShelfProduct />
                <span className="shadow"></span>
            </section>
            <p>
                <b>Total:</b> 6 produtos encontrados
            </p>
            <Button label={"Voltar"} url={"filter"}></Button>
        </Layout>
    );
};

export default Products;
