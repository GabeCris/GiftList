import React, { useState } from "react";
import { ConfirmIcon } from "../../components/Icons";

import { FilterContext } from "./FilterContext";

function FilterProvider({ children }) {
    const [selected, setSelected] = useState({
        label: "Todas",
        icon: <ConfirmIcon />,
    });

    return (
        <FilterContext.Provider
            value={{
                selected,
                setSelected,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}

export default FilterProvider;
