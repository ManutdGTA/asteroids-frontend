import React, { useState } from "react";
import Close from "./assets/close.png";
import "./addModal.css";
import { postMiners } from "./api/api";

function AddModal(props) {
  const { handleHideModal } = props;
  const [text, setText] = useState("");
  const [carryCapacity, setCarryCapacity] = useState("");
  const [travelSpeed, setTravelSpeed] = useState("");
  const [miningSpeed, setMiningSpeed] = useState("");

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const carryCapacityChangeHandler = (event) => {
    setCarryCapacity(event.target.value);
  };
  const travelSpeedChangeHandler = (event) => {
    setTravelSpeed(event.target.value);
  };
  const miningSpeedChangeHandler = (event) => {
    setMiningSpeed(event.target.value);
  };
  const handleSave = async () => {
    console.log(text);
    console.log(carryCapacity);
    console.log(travelSpeed);
    console.log(miningSpeed);
    // name: 'Miner '+i,
    //                 planet: planet,
    //                 x: planet.position.x,
    //                 y: planet.position.y,
    //                 carryCapacity: Math.floor(Math.random() * 200) + 1,
    //                 travelSpeed: Math.floor(Math.random() * 200) + 1, // 10 for debug
    //                 miningSpeed: Math.floor(Math.random() * 200) + 1,
    //                 status: 0,
    //                 minerals: 0,
    //                 angle: 0,
    // "Miner validation failed: planet: Cast to ObjectId failed for value \"PL1\" (type string) at path \"planet\" because of \"BSONTypeError\", minerals: Path `minerals` is required., status: Path `status` is required., angle: Path `angle` is required., y: Path `y` is required., x: Path `x` is required."

    const res = await postMiners({
      name: text,
      planet: "PL1",
      travelSpeed: travelSpeed,
      carryCapacity: carryCapacity,
      miningSpeed: miningSpeed,
    });
    if (res) {
      console.log(res);
    }
  };
  return (
    <div className="modal">
      <div className="modal-block">
        <img
          src={Close}
          className="close"
          alt="logo"
          onClick={() => {
            handleHideModal(false);
          }}
        />
        <p className="title">Create a miner</p>
        <p className="label">Name</p>
        <input type="text" value={text} onChange={textChangeHandler} />
        <p className="label">Planet</p>
        <select>
          <option>PL1</option>
          <option>PL2</option>
          <option>PL3</option>
        </select>
        <p className="title">Assign points</p>
        <div className="detail">
          <div className="container">
            <p className="label">carryCapacity</p>
            <input
              type="text"
              value={carryCapacity}
              onChange={carryCapacityChangeHandler}
            />
          </div>
          <div className="container">
            <p className="label">travelSpeed</p>
            <input
              type="text"
              value={travelSpeed}
              onChange={travelSpeedChangeHandler}
            />
          </div>
          <div className="container">
            <p className="label">miningSpeed</p>
            <input
              type="text"
              value={miningSpeed}
              onChange={miningSpeedChangeHandler}
            />
          </div>
        </div>
        <p className="total">Total: 170/200 </p>
        <div className="save" onClick={handleSave}>
          Save
        </div>
      </div>
    </div>
  );
}
export default AddModal;
