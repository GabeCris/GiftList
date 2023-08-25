import React, { useCallback, useState, useEffect } from "react";
import Button from "../../components/Button";
import CategoryRow from "../../components/CategoryRow";
import Input from "../../components/Input";
import Layout from "../../components/Layout/Layout";
import { useProduct } from "../../contexts/ProductContext";
import { db } from "../../config/firebase";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useModal } from "../../contexts/ModalContext";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteIcon } from "../../components/Icons";

const EditProduct = () => {
  const { openModal } = useModal();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const usersCollectionRef = collection(db, "products");
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
    productHighlight,
    setProductHighlight,
  } = useProduct();
  const defaultImage = "../assets/preview.svg";

  const navigate = useNavigate();

  const handleChange = (event, value) => {
    event.preventDefault();
    setProductPrice(value);
  };

  const editProduct = useCallback(async () => {
    setIsLoading(true);
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      productName,
      productCategory,
      productPrice,
      productUrl,
      productUrlImage,
      productStatus,
      productHighlight,
    });
    setIsLoading(false);
    clearInputs();
    navigate("/edit");
  }, [productName, productCategory, productPrice, productUrl, productUrlImage, productHighlight]);

  const deleteProduct = async () => {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);
    clearInputs();
    navigate("/edit");
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      setProduct(
        data.docs
          ?.map((doc) => ({ ...doc.data(), id: doc.id }))
          ?.find((data) => data.id == id)
      );
      // setSkeleton(false);
    };
    console.log(product, "MEU PRODUCT")
    getProducts();
  }, []);

  useEffect(() => {
    setProductName(product?.productName);
    setProductCategory(product?.productCategory);
    setProductPrice(product?.productPrice);
    setProductUrl(product?.productUrl);
    setProductUrlImage(product?.productUrlImage);
    setProductHighlight(product?.productHighlight)
  }, [product]);

  return (
    <Layout title="Editar">
      <form>
        <Input
          name="Nome do produto"
          placeholder="Informe o nome"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          type={"text"}
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
        <label className="input-highlight">
          <input
            type="checkbox"
            checked={productHighlight}
            onChange={(e) => setProductHighlight(e.target.checked)}
          />
          Produto Destaque
        </label>
        <Button
          label={"Editar"}
          isLoading={isLoading}
          onClick={(e) => {
            e.preventDefault();
            openModal("edited", () => editProduct());
          }}
        ></Button>
      </form>
      <Button label={"Voltar"} secondary={true} url={"/edit"}></Button>
      <Button
        icon
        tertiary={true}
        onClick={() => {
          openModal("deleteReserve", () => deleteProduct());
        }}
      >
        <DeleteIcon />
      </Button>
    </Layout>
  );
};

export default EditProduct;
