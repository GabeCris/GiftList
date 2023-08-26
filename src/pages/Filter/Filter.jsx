import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button";
import { iconsFilterList } from "./List";
import { useFilter } from "../../contexts/FilterContext/FilterContext";
import { EditIcon, HistoryIcon, UserIcon } from "../../components/Icons";
import { useModal } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const InitialPage = () => {
  const { selected, setSelected } = useFilter();
  const userId = localStorage.getItem("userId");
  const adminIds = ["NX5JDD0ih5DZHmwO7LXI", "vZKEfCkXnraXgS4sLn1b"];
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { clearData } = useUser();

  const highlightText = (text) => {
    // Substituir a palavra "destaque" pela mesma palavra envolta em uma tag <span>
    return text.replace(/destaque/g, "<span>destaque</span>");
  };

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
      <Button
        label={"Filtrar"}
        onClick={() => {
          openModal("tip", () => {
            navigate("/products");
            clearData();
          });
          setTimeout(() => {
            const text = document.querySelector(".layout-modal-text");

            if (text) {
              text.innerHTML = highlightText(text.textContent);
              console.log("Texto do modal modificado");
            }
          }, 100);
        }}
      />
      <Button
        label={"Sair"}
        secondary={true}
        onClick={() =>
          openModal("logout", () => {
            navigate("/login");
            clearData();
          })
        }
      />
      {adminIds.includes(userId) && (
        <>
          <Button tertiary url={"/user"} icon>
            <UserIcon />
          </Button>
          <Button tertiary url={"/history"} icon>
            <HistoryIcon />
          </Button>
          <Button tertiary url={"/edit"} icon>
            <EditIcon />
          </Button>
        </>
      )}
    </Layout>
  );
};

export default InitialPage;
