import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { getIp } from "./Api/api";

import "./App.css";

function App() {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getIp()
    console.log(process.env)
  }

  return (
    <>
      <div className="top__details">
        <h1 className="top__details-heading">IP Address Tracker</h1>

        <form action="" className="input-form" onSubmit={onSubmit}>
          <div className="input-control">
            <input
              type="text"
              id="input"
              name="input"
              className="input-field"
            />
            <button className="btn">
              <HiOutlineChevronRight style={{fontSize: "25px", fontWeight: "bolder"}} />
            </button>
          </div>
        </form>

        <div className="top__details-info">
          <div className="top__details-info-box">
            <p>IP Address</p>
            <h2>192.212.174.101</h2>
          </div>
          <div className="top__details-info-box">
            <p>Location</p>
            <h2>Brooklyn, NY 10001</h2>
          </div>
          <div className="top__details-info-box">
            <p>Timezone</p>
            <h2>UTC -5:00</h2>
          </div>
          <div className="top__details-info-box">
            <p>ISP</p>
            <h2>SpaceX Starlink</h2>
          </div>
        </div>
        

      </div>
      <div className="map__details"></div>
    </>
  );
}

export default App;
