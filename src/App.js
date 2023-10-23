import React, { useEffect, useState } from "react";
import Field from "./components/Field";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("RUB");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState({});
  const currency = [
    {
      name: "USD",
      value: 1,
      id: 1,
    },
    {
      name: "RUB",
      value: 94.64,
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

  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        // alert("Не удалось получить информацию");
      });
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setToPrice(result);
    setFromPrice(value);
  };
  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
  };

  return (
    <div className="wrapper">
      <div className="field">
        <Field
          value={fromPrice}
          currency={currency}
          currencyValue={fromCurrency}
          onCangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
        />
        <Field
          value={toPrice}
          currency={currency}
          currencyValue={toCurrency}
          onCangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
        />
      </div>
    </div>
  );
}
