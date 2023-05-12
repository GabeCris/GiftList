import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import ShelfHistory from "../../components/ShelfHistory/ShelfHistory";
import Button from "../../components/Button/Button";
import { LogoutIcon } from "../../components/Icons";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const History = () => {
  const [histories, setHistories] = useState();

  useEffect(() => {
    const getHistories = async () => {
      const historyCollectionsRef = collection(db, "history");
      const data = await getDocs(historyCollectionsRef);
      setHistories(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          ?.sort((a, b) => {
            const [diaA, mesA] = a.date.split("/");
            const [horaA, minutosA] = a.hour.split(":");
            const dataA = new Date(0, mesA - 1, diaA, horaA, minutosA);

            const [diaB, mesB] = b.date.split("/");
            const [horaB, minutosB] = b.hour.split(":");
            const dataB = new Date(0, mesB - 1, diaB, horaB, minutosB);

            return dataB - dataA;
          })
      );
    };
    getHistories();
  }, []);

  return (
    <Layout title="Histórico">
      <div className="history-container">
        {histories?.map((hist) => (
          <ShelfHistory props={hist} />
        ))}
      </div>
      <section className="info-button">
        <p>
          Visualize o <b>histórico de acesso</b> de seus usuários
        </p>
        <Button url={"/filter"} icon>
          <LogoutIcon />
        </Button>
      </section>
    </Layout>
  );
};

export default History;
