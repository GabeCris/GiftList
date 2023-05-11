import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import ShelfProduct from "../../components/ShelfProduct";
import { GiftIcon, GiftOpenIcon, LogoutIcon } from "../../components/Icons";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useFilter } from "../../contexts/FilterContext";
import Skeleton from "../../components/Skeleton";
import Popup from "../../components/Popup/Popup";

const Products = () => {
  const usersCollectionsRef = collection(db, "products");
  const { selected } = useFilter();
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [view, setView] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(usersCollectionsRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setView(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      selected.label !== "Todas"
        ? products
            ?.filter((product) => product.productCategory === selected.label)
            .sort((a, b) => {
              if (a.userId === userId && b.userId !== userId) {
                return -1;
              } else if (a.userId !== userId && b.userId === userId) {
                return 1;
              } else if (
                a.productStatus === "available" &&
                b.productStatus !== "available"
              ) {
                return -1;
              } else if (
                a.productStatus !== "available" &&
                b.productStatus === "available"
              ) {
                return 1;
              } else {
                return a.productName.localeCompare(b.productName);
              }
            })
        : products
            ?.map((product) => product)
            .sort((a, b) => {
              if (a.userId === userId && b.userId !== userId) {
                return -1;
              } else if (a.userId !== userId && b.userId === userId) {
                return 1;
              } else if (
                a.productStatus === "available" &&
                b.productStatus !== "available"
              ) {
                return -1;
              } else if (
                a.productStatus !== "available" &&
                b.productStatus === "available"
              ) {
                return 1;
              } else {
                return a.productName.localeCompare(b.productName);
              }
            })
    );
  }, [selected, products]);

  const hasReservated = products?.find(
    (item) => item.userId === userId
  )?.productName;

  return (
    <Layout>
      <Filter />
      <section className="products-container">
        {view && Array.from(Array(6)).map(() => <Skeleton />)}
        {filteredProducts?.map((item) => (
          <ShelfProduct props={item} />
        ))}
      </section>
      <section className="info-button">
        {hasReservated ? (
          <p>
            Clique no{" "}
            <span>
              <GiftIcon />
            </span>{" "}
            <b>presente fechado</b> para desfazer a reserva!
          </p>
        ) : (
          <p>
            Clique no <GiftOpenIcon /> <b>presente aberto</b> para reservar um
            produto!
          </p>
        )}
        <Button url={"/filter"} icon>
          <LogoutIcon />
        </Button>
      </section>
    </Layout>
  );
};

export default Products;
