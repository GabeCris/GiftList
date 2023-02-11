import React from "react";
import { useFilter } from "../../contexts/FilterContext/FilterContext";
import Button from "../Button";

const Filter = () => {
    const { selected } = useFilter();
    return (
        <section>
            O filtro selecionado foi <b>{selected.label}</b>
            {selected.icon}
            <Button label={"Voltar"} url="filter"/>
        </section>
    );
};

export default Filter;
