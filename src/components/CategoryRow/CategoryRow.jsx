import React from "react";
import { iconsFilterList } from "../../pages/Filter/List";

const CategoryRow = () => {
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
                                        value={icon}
                                        name={"category"}
                                        id={label}
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
