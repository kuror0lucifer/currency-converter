import React from "react";

const currency = ["RUB", "EUR", "USD", "GRB"];

export default function Field() {
  return (
    <div className="wrapper">
      <div className="field">
        <h1 className="currency-title">Конвертер валют</h1>
        <div className="currency">
          <ul className="list">
            {currency.map((el) => {
              return <li className="list-item">{el}</li>;
            })}
          </ul>
          <ul className="list">
            {currency.map((el) => {
              return <li className="list-item">{el}</li>;
            })}
          </ul>
        </div>
        <div className="inputs">
          <input type="number" className="input-item" />
          <input type="number" className="input-item" />
        </div>
      </div>
    </div>
  );
}
