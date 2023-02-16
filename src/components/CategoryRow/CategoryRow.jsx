import React from "react";
import { iconsFilterList } from "../../pages/Filter/List";

const CategoryRow = ({selected, setSelected}) => {
    return (
        <section className="input-category-container">
            <p className="inputLabel">Categoria do produto</p>
            <div className="input-category-items">
                {iconsFilterList.map(
                    ({ label, icon }) =>
                        label !== "Todas" && (
                            <>
                                <label
                                    className="input-category-item"
                                    htmlFor={label}
                                >
                                    <input
                                        type="radio"
                                        value={label}
                                        name={"category"}
                                        id={label}
                                        checked={selected === label ? true : false}
                                        onClick={(e)=> setSelected(e.target.value)}
                                    />
                                    <div className="input-category-box">
                                        {icon}
                                    </div>
                                </label>
                            </>
                        )
                )}
            </div>
        </section>
    );
};

export default CategoryRow;
