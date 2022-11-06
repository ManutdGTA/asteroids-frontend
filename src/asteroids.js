import React, { useEffect, useState } from "react";
import "./asteroids.css";
import { getAsteroids } from "./api/api";

function Asteroids() {
  const [asteroidsList, setasteroidsList] = useState([]);

  useEffect(() => {
    handleGetasteroids();
  }, []);
  const handleGetasteroids = async () => {
    const res = await getAsteroids({});
    if (res) {
      console.log(res);
      setasteroidsList(res);
    }
  };
  return (
    <div className="asteroids">
      <div className="asteroids_header">
        <span>Name</span>
        <span>Minerals</span>
        <span>Current miner</span>
        <span>Position</span>
      </div>
      <div className="white_line"></div>
      {asteroidsList.map((v) => (
        <div key={v._id}>
          <div className="asteroids_row">
            <span className="title">{v.name}</span>
            {v.minerals === 0 ? (
              <span className="value red">{v.minerals}</span>
            ) : (
              <span className="value">{v.minerals}</span>
            )}
            <span className="value">{v.currentMiner}</span>
            <span className="value">
              {v.position.x},{v.position.y}
            </span>
          </div>
          <div className="white_line"></div>
        </div>
      ))}
      <div className="white_line"></div>
    </div>
  );
}

export default Asteroids;
