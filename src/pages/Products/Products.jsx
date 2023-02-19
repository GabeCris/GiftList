import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import ShelfProduct from "../../components/ShelfProduct";
import { GiftOpenIcon } from "../../components/Icons";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useFilter } from "../../contexts/FilterContext";

const Products = () => {
    const usersCollectionsRef = collection(db, "products");
    const { selected } = useFilter();
    const [products, setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState();

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(usersCollectionsRef);
            setProducts(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        getProducts();
    }, []);

    useEffect(() => {
        console.log(selected.label)
        setFilteredProducts(
            selected.label !== "Todas"
                ? products?.filter(
                      (product) => product.productCategory === selected.label
                  )
                : products?.map((product) => product)
        );
    }, [selected, products]);

    return (
        <Layout>
            <Filter />
            <section className="products-container">
                {filteredProducts?.map((item) => (
                    <ShelfProduct props={item} />
                ))}
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
