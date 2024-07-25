import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allcoin, setallcoin] = useState([]);
  const [currency, setcurrency] = useState({ name: "usd", symbol: "$" });

  const fetchAllcoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-LmKnuZinVBNP7zEcfTEHky1Y",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setallcoin(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchAllcoin();
  }, [currency]);

  const constextvalue = { allcoin, currency, setcurrency };
  return (
    <CoinContext.Provider value={constextvalue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
