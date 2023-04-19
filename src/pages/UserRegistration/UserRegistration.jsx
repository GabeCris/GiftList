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
import ReactCodeInput, { reactCodeInput } from "react-code-input";

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

const UserRegistration = () => {
  const { changeModal } = useModal();
  const usersCollectionRef = collection(db, "user");
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState();
  const [pinCode, setPinCode] = useState("0212");

  const handleSubmit = useCallback(
    async (e) => {
      setIsLoading(true);
      e.preventDefault();
      await addDoc(usersCollectionRef, { userName, pinCode });
      setIsLoading(false);
      changeModal("userRegistration");
    },
    [userName, pinCode]
  );

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode);
  };

  return (
    <Layout title="Cadastro">
      <form onSubmit={handleSubmit}>
        <Input
          name="Nome do usuário"
          placeholder="Informe o nome"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type={"text"}
        ></Input>
        <div className="inputCode">
          <label htmlFor="" className="inputLabel">
            Código de acesso
          </label>
          <ReactCodeInput
            type="number"
            fields={4}
            placeholder={"0"}
            onChange={handlePinChange}
            value={pinCode}
            autoFocus={false}
            {...props}
          />
        </div>
        <Button
          label={"ADICIONAR"}
          type="submit"
          isLoading={isLoading}
        ></Button>
      </form>
      <Button label={"Voltar"} secondary={true} url={"/user"}></Button>
    </Layout>
  );
};

export default UserRegistration;
