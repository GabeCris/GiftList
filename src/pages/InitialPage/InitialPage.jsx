import React, { useState, useEffect } from "react";
import ReactCodeInput from "react-code-input";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";
import { reactCodeInput } from "react-code-input";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

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
    const [users, setUsers] = useState();
    const [filteredUser, setFilteredUser] = useState();
    const myHash = window.location.hash;

    useEffect(() => {
        const getUsers = async () => {
            const usersCollectionsRef = collection(db, "user");
            const data = await getDocs(usersCollectionsRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    useEffect(() => {
        setFilteredUser(users?.filter(user => user.userName.toLowerCase().replace(" ", "_") == myHash?.replace("#", ""))?.map(user => user))
        console.log(users?.map(item => item.userName.toLowerCase().replace(" ", "_")))
        console.log(filteredUser)
    }, [users])

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
                        value={filteredUser && filteredUser[0]?.userName}
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
                        value={filteredUser && filteredUser[0]?.pinCode}
                        placeholder={"0"}
                        autoFocus={false}
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
