import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button";
import { AddIcon, LogoutIcon } from "../../components/Icons";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import SkeletonEdit from "../../components/SkeletonEdit";
import ShelfUser from "../../components/ShelfUser";

const User = () => {
    const [products, setProducts] = useState();
    const [users, setUsers] = useState();
    const [view, setView] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const usersCollectionsRef = collection(db, "user");
            const data = await getDocs(usersCollectionsRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setView(false);
        };
        getUsers();
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            const usersCollectionsRef = collection(db, "products");
            const data = await getDocs(usersCollectionsRef);
            setProducts(
                data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        getProducts();
    }, []);

    return (
        <Layout title="Usuários">
            <section className="products-container edit-container">
                {view && Array.from(Array(8)).map(() => <SkeletonEdit />)}
                {users?.map((item) => (
                    // <ShelfProduct props={item} />
                    <ShelfUser
                        id={item?.id}
                        userName={item?.userName}
                        pinCode={item?.pinCode}
                        products={products}
                    />
                ))}
            </section>
            <section className="info-button">
                <Button url={"/userRegistration"} icon>
                    <AddIcon />
                </Button>
                <div className="info-product">
                    <p>
                        <b>Usuários: </b>
                        {users ? users?.length : "0"}
                    </p>
                </div>
                <Button url={"/filter"} icon>
                    <LogoutIcon />
                </Button>
            </section>
        </Layout>
    );
};

export default User;
