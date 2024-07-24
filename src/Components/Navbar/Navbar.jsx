import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Icon from "../../assets/arrow_icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          SIgnup <img src={Icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
