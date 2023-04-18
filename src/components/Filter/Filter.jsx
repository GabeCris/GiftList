import React, { useState } from "react";
import { useFilter } from "../../contexts/FilterContext/FilterContext";
import { iconsFilterList } from "../../pages/Filter/List";
import { CloseIcon, ConfirmIcon, FilterIcon } from "../Icons";

const Filter = () => {
  const { selected, setSelected } = useFilter();
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <section className="filter-container">
      <div className="filter-content">
        <div
          className="filter-button"
          // onMouseLeave={() => setOpenOptions(false)}
          onClick={() => setOpenOptions(!openOptions)}
        >
          <FilterIcon />
          Filtrar
        </div>
        <div className="filter-wrapper">
          {openOptions &&
            iconsFilterList.map(
              ({ label, icon }) =>
                label !== "Todas" && (
                  <span
                    className={selected.label === label && "filter-active"}
                    onClick={() =>
                      selected.label === label
                        ? setSelected({
                            label: "Todas",
                            icon: <ConfirmIcon />,
                          })
                        : (setSelected({
                            label: label,
                            icon: icon,
                          }),
                          setOpenOptions(!openOptions))
                    }
                  >
                    {label}
                  </span>
                )
            )}
        </div>
        {selected.label !== "Todas" && (
          <div
            className="filter-icon"
            onClick={() =>
              setSelected({
                label: "Todas",
                icon: <ConfirmIcon />,
              })
            }
          >
            {selected.icon}
            <CloseIcon />
          </div>
        )}
      </div>
    </section>
  );
};

export default Filter;
