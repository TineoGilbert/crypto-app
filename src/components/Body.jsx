import React, { useEffect, useState } from "react";
import Axios from "axios";

const Body = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setCoins(response.data.coins);
        console.log(response.data);
      }
    );
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.includes(search);
  });

  return (
    <div style={{ backgroundColor: "#ecf0f1" }}>
      <div style={{ backgroundColor: "black" }}>
        <h3 style={{ color: "whitesmoke" }}>Cryto Currency Finder</h3>
        <p>By Gilbert E. Tineo</p>
        <div className="HeaderCoin">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="form-control"
            type="text"
            placeholder="Bitcoin / Ethereum / Binance .."
          />
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <div className="container">
            <div class="row">
              <div class="col"> </div>
              <div class="col" style={{ marginLeft: "5%" }}>
                <div
                  className="card text-white bg-dark mb-3 border-primary mb-3"
                  style={{ maxWidth: "18rem", marginRight: "5px" }}
                >
                  <div className="card-header border-primary">
                    <h4>{coin.name}</h4>
                  </div>
                  <div className="container" style={{ marginTop: "7px" }}>
                    <img src={coin.icon} style={{ width: "50px" }}></img>
                  </div>
                  <p style={{ marginTop: "7px", color: "#2ecc71" }}>
                    <b style={{ color: "yellow" }}>Price: $</b> {coin.price}
                  </p>
                  <h5>{coin.symbol}</h5>
                  <div class="card-footer bg-transparent border-primary">
                    <a href={coin.websiteUrl} target="_blank">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
              <div class="col"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
