import React, { useContext, useEffect, useState } from "react";
import "./coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../Context/CoinContext";
import Linechart from "../../Components/Linechartone/Linechart"; // Ensure this matches the exact casing of the file

function Coin() {
  const { coinID } = useParams();
  const [coindata, setcoindata] = useState();
  const [historicaldata, sethistoricaldata] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoindata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-LmKnuZinVBNP7zEcfTEHky1Y",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`, options)
      .then((response) => response.json())
      .then((response) => setcoindata(response))
      .catch((err) => console.error(err));
  };

  const fetchhistoricaldata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-LmKnuZinVBNP7zEcfTEHky1Y",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency.name}&days=10&interval=daily                                            `,
      options
    )
      .then((response) => response.json())
      .then((response) => sethistoricaldata(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoindata();
    fetchhistoricaldata();
  }, [currency]);

  if (coindata && historicaldata) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coindata.image.large} alt="" />
          <p>
            <b>
              {coindata.name} ({coindata.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <Linechart historicaldata={historicaldata}></Linechart>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
}

export default Coin;
