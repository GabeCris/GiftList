import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import CategoryRow from "../../components/CategoryRow";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";

const ProductRegistration = () => {
    const [url, setUrl] = useState();
    const defaultImage = "../assets/preview.svg";

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log('teste')
    }, []);

    return (
        <Layout title="Cadastro">
            <form onSubmit={handleSubmit}>
                <Input
                    name="Nome do produto"
                    placeholder="Informe o nome"
                    required
                    type={"text"}
                    minLength={6}
                ></Input>
                <CategoryRow></CategoryRow>
                <div className="input-price">
                    <Input
                        name="Preço do produto (R$)"
                        placeholder="Informe o preço"
                        required
                        type={"number"}
                    ></Input>
                    <img
                        src={url || defaultImage}
                        onError={(e) => (e.target.src = defaultImage)}
                    />
                </div>
                <div className="input-double">
                    <Input
                        name="Url do produto"
                        placeholder="Informe a url"
                        required
                        type={"text"}
                        value={url}
                        autoComplete={false}
                        onChange={(e) => setUrl(e.target.value)}
                    ></Input>
                    <Input
                        name="Url de imagem"
                        placeholder="Informe a url"
                        required
                        type={"text"}
                        value={url}
                        autoComplete={false}
                        onChange={(e) => setUrl(e.target.value)}
                    ></Input>
                </div>
                <Button label={"ADICIONAR"} type="submit"></Button>
            </form>
        </Layout>
    );
};

export default ProductRegistration;
