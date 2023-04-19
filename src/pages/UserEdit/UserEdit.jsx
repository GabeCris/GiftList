import React, { useCallback, useState, useEffect } from "react";
import Button from "../../components/Button";
import CategoryRow from "../../components/CategoryRow";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";
import { useProduct } from "../../contexts/ProductContext";
import { db } from "../../config/firebase";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import formatPrice from "../../utils/formatPrice";
import { useModal } from "../../contexts/ModalContext";
import { useNavigate, useParams } from "react-router-dom";
import ReactCodeInput, { reactCodeInput } from "react-code-input";
import { DeleteIcon } from "../../components/Icons";

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

const UserEdit = () => {
  const { openModal } = useModal();
  const usersCollectionRef = collection(db, "user");
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState();
  const [currentPinCode, setCurrentPinCode] = useState();
  const [pinCode, setPinCode] = useState("0000");
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode);
  };

  const deleteUser = async () => {
    const docRef = doc(db, "user", id);
    await deleteDoc(docRef);
    navigate("/user");
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      setUser(
        data.docs
          ?.map((doc) => ({ ...doc.data(), id: doc.id }))
          ?.find((data) => data.id == id)
      );
      // setSkeleton(false);
    };
    getProducts();
  }, []);

  const editUser = useCallback(async () => {
    setIsLoading(true);
    const docRef = doc(db, "user", id);
    await updateDoc(docRef, {
      userName,
      pinCode,
    });
    setIsLoading(false);

    //   clearInputs();
  }, [userName, pinCode]);

  useEffect(() => {
    setCurrentPinCode(user?.pinCode);
    setUserName(user?.userName);
    setPinCode(user?.pinCode);
  }, [user]);

  return (
    <Layout title="Editar">
      <form>
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
        <p className="currentCode">
          O código de acesso atual é <b>{currentPinCode}</b>
        </p>
        <Button
          label={"EDITAR"}
          isLoading={isLoading}
          onClick={(e) => {
            e.preventDefault();
            openModal("userEdit", () => editUser());
          }}
        ></Button>
      </form>
      <Button label={"Voltar"} secondary={true} url={"/user"}></Button>
      <Button
        icon
        tertiary={true}
        onClick={() => {
          openModal("deleteUser", () => deleteUser());
        }}
      >
        <DeleteIcon />
      </Button>
    </Layout>
  );
};

export default UserEdit;
