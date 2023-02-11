import React from "react";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import { useFilter } from "../../contexts/FilterContext/FilterContext";

const Products = () => {
    const {selected} = useFilter();
    return (
        <Layout>
            <Filter />
            <section className="products-container">
                A categoria selecionada foi "<b>{selected.label}</b>"
                <Button label={"Voltar"} url={"filter"}></Button>
            </section>
        </Layout>
    );
};

export default Products;
