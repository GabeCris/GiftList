import React from "react";
import IntlCurrencyInput from "react-intl-currency-input";

const currencyConfig = {
    locale: "pt-BR",
    formats: {
        number: {
            BRL: {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        },
    },
};

function Input(props) {
    return (
        <div className={"inputContainer"}>
            <label htmlFor={props.name} className={"inputLabel"}>
                {props.name}
            </label>
            {props.price ? (
                <IntlCurrencyInput
                    currency="BRL"
                    config={currencyConfig}
                    className={"input"}
                    id={props.name}
                    {...props}
                />
            ) : (
                <input className={"input"} id={props.name} {...props} />
            )}
        </div>
    );
}

export default Input;
