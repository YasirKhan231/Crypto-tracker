import React from "react";
import "./coin.css";
import { useParams } from "react-router-dom";

function coin() {
  const { coinID } = useParams();
  return (
    <div>
      <h2>Coin : {coinID}</h2>
    </div>
  );
}

export default coin;
