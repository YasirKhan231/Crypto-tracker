import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../Context/CoinContext";

function Home() {
  const { allcoin, currency } = useContext(CoinContext);
  const [displayCoin, setdisplaycoin] = useState([]);

  useEffect(() => {
    setdisplaycoin(allcoin);
  }, [allcoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace{" "}
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Signup to
          explore more about about crypto
        </p>
        <form action="">
          <input type="text" placeholder="Search Crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div className="crypto-image">
              <img src={item.image} alt="" />
              <p>{item.name + "-" + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
              {" %"}
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
