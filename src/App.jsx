import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/coin";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coin/:coinID" element={<Coin></Coin>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
