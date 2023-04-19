import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button";
import { iconsFilterList } from "./List";
import { useFilter } from "../../contexts/FilterContext/FilterContext";
import { EditIcon, UserIcon } from "../../components/Icons";
import { useModal } from "../../contexts/ModalContext";
import Popup from "../../components/Popup/Popup";

const InitialPage = () => {
  const { selected, setSelected } = useFilter();
  const { openModal } = useModal();

  return (
    <Layout title="Categorias">
      <h2 className="layout-content-title">Filtre por categoria</h2>
      <section className="layout-filter-container">
        {iconsFilterList.map(({ label, icon }) => (
          <>
            <label
              className="layout-filter-item"
              htmlFor={label}
              onClick={() => setSelected({ label: label, icon: icon })}
            >
              <input
                type="radio"
                value={icon}
                name={"filter"}
                id={label}
                checked={selected.label === label}
              />
              <div className="layout-filter-box">{icon}</div>
              <p className="layout-filter-label">{label}</p>
            </label>
          </>
        ))}
      </section>
      <Button label={"FILTRAR"} url={"/products"} />
      <Button label={"Sair"} url={"/"} secondary={true} />
      <Button url={"/user"} icon>
        <UserIcon />
      </Button>
      <Button url={"/edit"} icon>
        <EditIcon />
      </Button>
    </Layout>
  );
};

export default InitialPage;
