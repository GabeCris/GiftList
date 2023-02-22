import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button";
import { useFilter } from "../../contexts/FilterContext/FilterContext";
import { AddIcon, EditIcon, LogoutIcon } from "../../components/Icons";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Filter from "../../components/Filter";
import ShelfEdit from "../../components/ShelfEdit";

const Edit = () => {
    const usersCollectionsRef = collection(db, "products");
    const { selected, setSelected } = useFilter();
    const [products, setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState();
    const [view, setView] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(usersCollectionsRef);
            setProducts(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setView(false);
        };
        getProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            selected.label !== "Todas"
                ? products?.filter(
                      (product) => product.productCategory === selected.label
                  )
                : products?.map((product) => product)
        );
    }, [selected, products]);

    return (
        <Layout title="Editar">
            <Filter />
            <section className="products-container edit-container">
                {/* {view && Array.from(Array(6)).map(() => <Skeleton />)} */}
                {filteredProducts?.map(
                    (item) =>
                        // <ShelfProduct props={item} />
                        <ShelfEdit props={item}/>
                )}
            </section>
            <section className="info-button">
                <Button url={"/productRegistration"} icon>
                    <AddIcon />
                </Button>
                <p>
                   <b>Reservados: X</b> 
                </p>
                <Button url={"/filter"} icon>
                    <LogoutIcon />
                </Button>
            </section>
        </Layout>
    );
};

export default Edit;
