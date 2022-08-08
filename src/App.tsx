import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import "./App.css";

function App() {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="top__details">
        <h1 className="heading">IP Address Tracker</h1>

        <form action="" className="input-form" onSubmit={onSubmit}>
          <div className="input-control">
            <input
              type="text"
              id="input"
              name="input"
              className="input-field"
            />
            <button className="btn">
              <HiOutlineChevronRight />
            </button>
          </div>
        </form>
      </div>
      <div className="map__details"></div>
    </>
  );
}

export default App;
