import { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Oops something went wrong 🤯🤯");
      });
  }, []);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search here 🔎"
            className="coin-input"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
