import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout/Layout";

const InitialPage = () => {
    return (
        <Layout title={"Initial Page"}>
            <b>Bem vindos a nossa lista de presentes!</b>
            <Button label={"Entrar"} url="/filter" />
            <Button
                label={"Cadastrar Produtos"}
                url="/productRegistration"
                secondary={true}
            />
        </Layout>
    );
};

export default InitialPage;
