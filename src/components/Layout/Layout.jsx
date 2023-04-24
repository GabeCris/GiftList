import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children, title = "Lista Presentes" }) => {
  const location = useLocation();
  const [isInitialPage, setIsInitialPage] = useState();

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
            <img src="../assets/minimalist-logo.svg" className="logo" />
          </section>
        )}
        <img src="../assets/flower-title.svg" className="flower-background" />
        <img src="../assets/flower-title.svg" className="flower-background-2" />
        <img src="../assets/logo-footer-desk.svg" className="footer-desktop" />
      </header>
      <main className="layout-content">{children}</main>
    </section>
  );
};

export default Layout;
