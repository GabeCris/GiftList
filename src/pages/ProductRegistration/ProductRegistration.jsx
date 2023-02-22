import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import CategoryRow from "../../components/CategoryRow";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";
import { useProduct } from "../../contexts/ProductContext";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import formatPrice from "../../utils/formatPrice";
import { useModal } from "../../contexts/ModalContext";

const ProductRegistration = () => {
    const { changeModal } = useModal();
    const usersCollectionRef = collection(db, "products");
    const [isLoading, setIsLoading] = useState(false);
    let userId = "";
    const {
        productName,
        setProductName,
        productCategory,
        setProductCategory,
        productPrice,
        setProductPrice,
        productUrl,
        setProductUrl,
        productUrlImage,
        productStatus,
        setProductUrlImage,
        clearInputs,
    } = useProduct();
    const defaultImage = "../assets/preview.svg";

    const handleChange = (event, value) => {
        event.preventDefault();
        setProductPrice(value);
    };

    const handleSubmit = useCallback(
        async (e) => {
            setIsLoading(true);
            e.preventDefault();
            await addDoc(usersCollectionRef, {
                productName,
                productCategory,
                productPrice,
                productUrl,
                productUrlImage,
                productStatus,
                userId,
            });
            setIsLoading(false);
            changeModal("registered");
            clearInputs();
        },
        [
            productName,
            productCategory,
            productPrice,
            productUrl,
            productUrlImage,
        ]
    );

    return (
        <Layout title="Cadastro">
            <form onSubmit={handleSubmit}>
                <Input
                    name="Nome do produto"
                    placeholder="Informe o nome"
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    type={"text"}
                    minLength={6}
                ></Input>
                <CategoryRow
                    selected={productCategory}
                    setSelected={setProductCategory}
                ></CategoryRow>
                <div className="input-price">
                    <Input
                        price="true"
                        name="Preço do produto (R$)"
                        placeholder="Informe o preço"
                        required
                        value={productPrice}
                        onChange={handleChange}
                    />
                    <img
                        src={productUrlImage || defaultImage}
                        onError={(e) => (e.target.src = defaultImage)}
                    />
                </div>
                <div className="input-double">
                    <Input
                        name="Url do produto"
                        placeholder="Informe a url"
                        required
                        type={"text"}
                        autoComplete="false"
                        value={productUrl}
                        onChange={(e) => setProductUrl(e.target.value)}
                    ></Input>
                    <Input
                        name="Url de imagem"
                        placeholder="Informe a url"
                        required
                        type={"text"}
                        autoComplete="false"
                        value={productUrlImage}
                        onChange={(e) => setProductUrlImage(e.target.value)}
                    ></Input>
                </div>
                <Button
                    label={"ADICIONAR"}
                    type="submit"
                    isLoading={isLoading}
                ></Button>
            </form>
            <Button label={"Voltar"} secondary={true} url={"/edit"}></Button>
        </Layout>
    );
};

export default ProductRegistration;
