import React, { useState, useEffect } from "react";
import ReactCodeInput from "react-code-input";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";
import { reactCodeInput } from "react-code-input";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useUser } from "../../contexts/UserContext";

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
  const [dbUserName, setDbUsername] = useState();
  const [dbUserPinCode, setDbPinCode] = useState();
  const myHash = window.location.hash;
  const { userName, setUserName, pinCode, setPinCode } = useUser();
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPinCode, setErrorPinCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const usersCollectionsRef = collection(db, "user");
      const data = await getDocs(usersCollectionsRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    localStorage.setItem("userId", "");
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    teste();
    if (step == 1) {
      dbUserName == userName
        ? setStep(2)
        : setErrorUserName("Usuário não encontrado!");
    } else {
      if (pinCode?.length === 4) {
        dbUserPinCode == pinCode
          ? navigate("/filter")
          : setErrorPinCode("Código incorreto!");
        handleHistoryUser(userName);
      }
    }
  };

  const teste = () => {
    const dataUser = users.find((user) => user.userName === userName);
    setDbUsername(dataUser?.userName);
    setDbPinCode(dataUser?.pinCode);
    localStorage.setItem("userId", dataUser?.id);
  };

  const getDataHoraFormatada = () => {
    var data = new Date();

    var dia = data.getDate();
    if (dia < 10) {
      dia = "0" + dia;
    }

    var mes = data.getMonth() + 1;
    if (mes < 10) {
      mes = "0" + mes;
    }

    var hora = data.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }

    var minutos = data.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }

    var dataFormatada = dia + "/" + mes;
    var horaFormatada = hora + ":" + minutos;

    return { data: dataFormatada, hora: horaFormatada };
  };

  const handleHistoryUser = async (userName) => {
    const historyCollectionsRef = collection(db, "history");
    let dateResult = getDataHoraFormatada();
    await addDoc(historyCollectionsRef, {
      userName,
      date: dateResult.data,
      hour: dateResult.hora,
    });
  };

  const handlePinChange = (pinCode) => {
    setErrorPinCode("");
    setPinCode(pinCode);
  };

  useEffect(() => {
    const { userName, pinCode } =
      users?.find(
        (user) =>
          user.userName.toLowerCase().replace(" ", "_").replace(" ", "_") ==
          myHash?.replace("#", "")
      ) ?? {};
    if (userName) {
      setUserName(userName);
      setPinCode(pinCode);
    }
  }, [users]);

  return (
    <Layout>
      <h2 className="layout-content-title">
        Bem vindos a nossa lista de presentes!
      </h2>
      <form onSubmit={handleSubmit}>
        {step == 1 ? (
          <>
            <Input
              name="Nome de usuário"
              placeholder="Informe o seu nome"
              onChange={(e) => {
                setUserName(e.target.value);
                setErrorUserName("");
              }}
              value={userName}
              required
              type={"text"}
              autoComplete={"off"}
            ></Input>
            <span className="error-message">{errorUserName}</span>
            <Button
              type="submit"
              label={"Próximo"}
              onClick={() => teste()}
              disabled={userName < 6 ? true : false}
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
              onChange={handlePinChange}
              value={pinCode}
              {...props}
            />
            <span className="error-message">{errorPinCode}</span>
            <Button
              type="submit"
              label={"Entrar"}
              disabled={pinCode.length < 4 ? true : false}
            />
            <Button label={"Voltar"} secondary onClick={() => setStep(1)} />
          </>
        )}
      </form>
    </Layout>
  );
};

export default InitialPage;
