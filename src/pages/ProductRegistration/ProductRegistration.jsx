import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import CategoryRow from "../../components/CategoryRow";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";
import { useProduct } from "../../contexts/ProductContext";

const ProductRegistration = () => {
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
        setProductUrlImage,
    } = useProduct();
    const defaultImage = "../assets/preview.svg";

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("teste");
    }, []);

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
                        price={true}
                        name="Preço do produto (R$)"
                        placeholder="Informe o preço"
                        required
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
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
                        autoComplete={false}
                        value={productUrl}
                        onChange={(e) => setProductUrl(e.target.value)}
                    ></Input>
                    <Input
                        name="Url de imagem"
                        placeholder="Informe a url"
                        required
                        type={"text"}
                        autoComplete={false}
                        value={productUrlImage}
                        onChange={(e) => setProductUrlImage(e.target.value)}
                    ></Input>
                </div>
                <Button label={"ADICIONAR"} type="submit"></Button>
            </form>
        </Layout>
    );
};

export default ProductRegistration;
