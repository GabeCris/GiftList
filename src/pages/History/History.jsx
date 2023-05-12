import React from "react";
import Layout from "../../components/Layout/Layout";
import ShelfHistory from "../../components/ShelfHistory/ShelfHistory";
import Button from "../../components/Button/Button";
import { LogoutIcon } from "../../components/Icons";

const History = () => {
  return (
    <Layout title="Histórico">
      <div className="history-container">
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
        <ShelfHistory></ShelfHistory>
      </div>
      <section className="info-button">
        <p>
          Visualize o <b>histórico  de acesso</b> de seus usuários
        </p>
        <Button url={"/filter"} icon>
          <LogoutIcon />
        </Button>
      </section>
    </Layout>
  );
};

export default History;
