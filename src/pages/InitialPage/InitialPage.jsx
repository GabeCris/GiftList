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
    const br = "%0a";
    const spc = "%20";

    return (
        <Layout>
            <h2 className="layout-content-title">
                Bem vindos a nossa lista de presentes!
            </h2>
            <a
                target={"_blank"}
                href={`https://wa.me/?text=D%C3%AA%20uma%20olhadinha%20na%20nossa%20lista%20de%20presentes!%0A%0ASeu%20nome%20de%20usu%C3%A1rio%3A%20*Bruna*%0ASeu%20c%C3%B3digo%20de%20acesso%3A%20*0212*%0A%0Ahttps%3A%2F%2Flista-bruna-gabriel.netlify.app%2F%0A%0A`}
            >
                ENVIAR ZAP
            </a>
            {step == 1 ? (
                <>
                    <Input
                        name="Nome de usuário"
                        placeholder="Informe o seu nome"
                        required
                        type={"text"}
                    ></Input>
                    <Button label={"Próximo"} onClick={() => setStep(2)} />
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
