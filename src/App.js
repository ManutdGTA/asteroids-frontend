// import logo from "./logo.svg";
import vector from "./assets/Vector.png";
import background from "./assets/background.png";
import miners from "./assets/miner.png";
import asteroids from "./assets/Asteroids.png";
import planets from "./assets/Planets.png";
import minersActive from "./assets/minerActive.png";
import asteroidsActive from "./assets/asteroidsActive.png";
import planetsActive from "./assets/PlanetsActive.png";
import React, { useState } from "react";
import "./App.css";
import Miners from "./miners.js";
import Asteroids from "./asteroids.js";
import Planets from "./planets.js";

function App() {
  const [tab, setTab] = useState(1);

  const tabSwitch = (index = 1) => {
    setTab(index);
  };
  return (
    <div className="App">
      <header className="App-header" >
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <img src={vector} className="App-logo" alt="logo" />
        <span>BACKEND MINER</span>
      </header>
      <div className="mid">
        <div className="left">
          <div className="left_tab">
            <div
              onClick={() => {
                tabSwitch(1);
              }}
              className={tab === 1 ? "cur tab" : "tab"}
            >
              {tab === 1 ? (
                <img src={minersActive} className="tab_pic" alt="logo" />
              ) : (
                <img src={miners} className="tab_pic" alt="logo" />
              )}
              <p>Miners</p>
            </div>
            <div
              onClick={() => {
                tabSwitch(2);
              }}
              className={tab === 2 ? "cur tab" : "tab"}
            >
              {tab === 2 ? (
                <img src={asteroidsActive} className="tab_pic" alt="logo" />
              ) : (
                <img src={asteroids} className="tab_pic" alt="logo" />
              )}
              <p>Asteroids</p>
            </div>
            <div
              onClick={() => {
                tabSwitch(3);
              }}
              className={tab === 3 ? "cur tab" : "tab"}
            >
              {tab === 3 ? (
                <img src={planetsActive} className="tab_pic" alt="logo" />
              ) : (
                <img src={planets} className="tab_pic" alt="logo" />
              )}
              <p>Planets</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="tab_con">
            {tab === 1 ? <Miners></Miners> : null}
            {tab === 2 ? <Asteroids></Asteroids> : null}
            {tab === 3 ? <Planets></Planets> : null}
          </div>
        </div>

        <div className="right">
          <p>250 YEARS</p>
          <img src={background} className="background" alt="logo" />
        </div>
      </div>
      
    </div>
  );
}

export default App;
