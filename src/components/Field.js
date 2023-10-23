import React from "react";

export default function Field({
  value,
  currency,
  onCangeCurrency,
  currencyValue,
  onChangeValue,
}) {
  return (
    <div className="block">
      <ul className="list">
        {currency.map((el) => {
          return (
            <li
              key={el.id}
              className={
                currencyValue === el.name ? "active list-item" : "list-item"
              }
              onClick={() => onCangeCurrency(el.name)}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
      <div className="inputs">
        <input
          type="number"
          className="input-item"
          placeholder={0}
          onChange={(el) => onChangeValue(el.target.value)}
        />
      </div>
    </div>
  );
}
