import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            <text>Price: {"₹"}</text>
            {price}
          </p>
          <p className="coin-volume">
            <text>{"₹"}Coin volume: </text>
            {volume.toLocaleString()}
          </p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: <text>{"₹"}</text>
            {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
