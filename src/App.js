import React, { useState, useEffect } from "react";
import Field from "./components/Field";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("RUB");
  const currency = [
    {
      name: "USD",
      value: 1,
      id: 1,
    },
    {
      name: "RUB",
      value: 94.29,
      id: 2,
    },
    {
      name: "EUR",
      value: 1.06,
      id: 3,
    },
    {
      name: "GRB",
      value: 1.22,
      id: 4,
    },
  ];

  return (
    <div className="wrapper">
      <div className="field">
        <Field
          currency={currency}
          currencyValue={fromCurrency}
          onCangeCurrency={setFromCurrency}
        />
        <Field
          currency={currency}
          currencyValue={toCurrency}
          onCangeCurrency={setToCurrency}
        />
      </div>
    </div>
  );
}
