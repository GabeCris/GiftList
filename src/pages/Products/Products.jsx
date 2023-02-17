import React from "react";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import ShelfProduct from "../../components/ShelfProduct";
import { GiftOpenIcon } from "../../components/Icons";

const Products = () => {
    return (
        <Layout>
            <Filter />
            <section className="products-container">
                <ShelfProduct type={"Reservated"} />
                <ShelfProduct />
                <ShelfProduct />
                <ShelfProduct type={"Wish"} />
                <ShelfProduct type={"Reservated"} />
                <ShelfProduct />
                <ShelfProduct />
                <ShelfProduct type={"Reservated"} />
                <ShelfProduct type={"Reservated"} />
                <ShelfProduct />
                <ShelfProduct type={"Reservated"} />
                <ShelfProduct />
                <ShelfProduct type={"Wish"} />
                <ShelfProduct type={"Reservated"} />
                <ShelfProduct />
                <ShelfProduct />
                <ShelfProduct type={"Reservated"} />
                <ShelfProduct />
                {/* <span className="shadow"></span> */}
            </section>
            <section className="info-button">
                <p>
                    Clique no <GiftOpenIcon /> <b>presente aberto</b> para
                    reservar um produto!
                </p>
                <Button url={"/filter"} logout></Button>
            </section>
        </Layout>
    );
};

export default Products;
