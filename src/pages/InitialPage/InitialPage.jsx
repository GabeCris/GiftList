import React, { useState, useEffect } from "react";
import ReactCodeInput from "react-code-input";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";
import { reactCodeInput } from "react-code-input";

const props = {
    className: reactCodeInput,
    inputStyle: {
        fontFamily: "Montserrat",
        margin: "4px",
        MozAppearance: "textfield",
        width: "50px",
        borderRadius: "10px",
        fontSize: "14px",
        height: "50px",
        paddingLeft: "20px",
        backgroundColor: "#EEEDED",
        color: "black",
        border: "none",
        outline: "none",
    },
    inputStyleInvalid: {
        fontFamily: "Montserrat",
        margin: "4px",
        MozAppearance: "textfield",
        width: "50px",
        borderRadius: "10px",
        fontSize: "14px",
        height: "50px",
        paddingLeft: "20px",
        backgroundColor: "#EEEDED",
        color: "black",
        border: "none",
    },
};

const InitialPage = () => {
    const [step, setStep] = useState(1);

    return (
        <Layout>
            <h2 className="layout-content-title">
                Bem vindos a nossa lista de presentes!
            </h2>
            {step == 1 ? (
                <>
                    <Input
                        name="Nome de usuário"
                        placeholder="Informe o seu nome"
                        required
                        type={"text"}
                    ></Input>
                    <Button label={"Próximo"} onClick={() => setStep(2)} />
                    <Button
                        label={"Cadastrar Produtos"}
                        url="/productRegistration"
                        secondary={true}
                    />
                </>
            ) : (
                <>
                    <label htmlFor="" className="inputLabel">
                        Código de acesso
                    </label>
                    <ReactCodeInput
                        type="number"
                        fields={4}
                        placeholder={"0"}
                        {...props}
                    />
                    <Button label={"Entrar"} url="/filter" />
                    <Button
                        label={"Voltar"}
                        secondary
                        onClick={() => setStep(1)}
                    />
                </>
            )}
        </Layout>
    );
};

export default InitialPage;
