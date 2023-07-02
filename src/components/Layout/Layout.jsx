import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children, title = "Lista Presentes" }) => {
  const location = useLocation();
  const [isInitialPage, setIsInitialPage] = useState();

  const adminUsers = ["NX5JDD0ih5DZHmwO7LXI", "vZKEfCkXnraXgS4sLn1b"];
  const userId = localStorage.getItem("userId");

  const [changeLogoCounter, setChangeLogoCounter] = useState(true);

  const dataFixa = new Date("2023/12/02");

  const dataAtual = new Date();
  dataAtual.setHours(0, 0, 0, 0);

  const diferencaEmMilissegundos = dataFixa - dataAtual;

  const diferencaEmDias = Math.floor(
    diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
  );

  useEffect(() => {
    // Inicia o setInterval para executar a cada 5 segundos
    const interval = setInterval(() => {
      // Altera o estado do elemento para o valor oposto
      setChangeLogoCounter((prevState) => !prevState);
    }, 5000);

    // Limpa o setInterval quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/login")) {
      setIsInitialPage(true);
      return;
    }
    setIsInitialPage(false);
  }, [location]);

  return (
    <section
      className={`layout-container ${
        isInitialPage && "layout-container-initialPage"
      }`}
    >
      <header className="layout-header">
        {isInitialPage ? (
          <img src="../assets/logo-1.svg" alt="" className="logo-initial" />
        ) : (
          <section className="layout-header-content">
            <h1 className="layout-title">{title}</h1>
            <img src="../assets/flower-title.svg" className="flower-title" />
            <div className="logo-counter">
              <img
                src="../assets/minimalist-logo.svg"
                className={`logo ${changeLogoCounter ? "logo-hide" : null}`}
              />
              <div
                className={`counter-days ${
                  !changeLogoCounter ? "counter-hide" : null
                }`}
              >
                <h2>Faltam {diferencaEmDias} dias</h2>
                <span>02 dez 2023</span>
              </div>
            </div>
          </section>
        )}
        <img src="../assets/flower-title.svg" className="flower-background" />
        <img src="../assets/flower-title.svg" className="flower-background-2" />
        <img src="../assets/logo-footer-desk.svg" className="footer-desktop" />
      </header>
      <main
        className={`layout-content ${
          adminUsers.includes(userId) ? "" : "layout-content-user"
        }`}
      >
        {children}
      </main>
    </section>
  );
};

export default Layout;
