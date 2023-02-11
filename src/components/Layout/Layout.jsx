import React from "react";

const Layout = ({ children, title = "Lista Presentes" }) => {
    return (
            <section className="layout-container">
                <header className="layout-header">
                    <h1 className="layout-title">{title}</h1>
                </header>
                <main className="layout-content">{children}</main>
            </section>
    );
};

export default Layout;
