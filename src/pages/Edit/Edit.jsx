import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button";
import { useFilter } from "../../contexts/FilterContext/FilterContext";
import { AddIcon, EditIcon, LogoutIcon } from "../../components/Icons";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Filter from "../../components/Filter";
import ShelfEdit from "../../components/ShelfEdit";
import SkeletonEdit from "../../components/SkeletonEdit";

const Edit = () => {
  const productCollectionsRef = collection(db, "products");
  const usersCollectionsRef = collection(db, "user");
  const { selected, setSelected } = useFilter();
  const [products, setProducts] = useState();
  const [users, setUsers] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [view, setView] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionsRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setView(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  console.log(users, "<<<<<<<<< USER")
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
        {view && Array.from(Array(8)).map(() => <SkeletonEdit />)}
        {filteredProducts?.map((item) => (
          // <ShelfProduct props={item} />
          <ShelfEdit product={item} user={users} />
        ))}
      </section>
      <section className="info-button">
        <Button url={"/productRegistration"} icon>
          <AddIcon />
        </Button>
        <div className="info-product">
          <p>
            <b>Total: </b>
            {products ? products?.length : "0"}
          </p>
          <p>
            <b>Reservados: </b>
            {products
              ? products?.filter((item) => item.productStatus === "unavailable")
                  ?.length
              : "0"}
          </p>
        </div>
        <Button url={"/filter"} icon>
          <LogoutIcon />
        </Button>
      </section>
    </Layout>
  );
};

export default Edit;
