import React, { useEffect, useState } from "react";
import { getPlanets, getMinersByPlanet } from "./api/api";
import "./planets.css";
import add from "./assets/add.png";
import AddModal from "./addModal.js";
import DetailPlanetModal from "./detailPlanetModal.js";

function Planets() {
  const [planetsList, setPlanetsList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    handlegetPlanets();
  }, []);
  const handlegetPlanets = async () => {
    const res = await getPlanets({});
    if (res) {
      console.log(res);
      setPlanetsList(res);
    }
  };
  const handleshowModal = () => {
    setIsShowModal(true);
  };
  const handleShowDetail = async (v) => {
    const res = await getMinersByPlanet(v._id);
    if (res) {
      console.log(res);
      setDetailData(res);
      setIsShowDetailModal(true);
    }
  };
  return (
    <div className="planets">
      <div className="planets_header">
        <span>Name</span>
        <span>Miners</span>
        <span>Minerals</span>
        <span></span>
      </div>
      <div className="white_line"></div>
      {planetsList.map((v) => (
        <div key={v._id}>
          <div className="planets_row">
            <span className="title" onClick={handleShowDetail.bind(this, v)}>
              {v.name}
            </span>
            <span className="value">{v.miners}</span>
            {v.minerals >= 1000 ? (
              <span className="value green">{v.minerals}/1000</span>
            ) : (
              <span className="value">{v.minerals}/1000</span>
            )}
            <span className="add">
              <img src={add} className="add_icon" alt="logo" />
              <span className="add_text" onClick={handleshowModal}>
                Create a miner
              </span>
            </span>
          </div>
          <div className="white_line"></div>
        </div>
      ))}
      <div className="white_line"></div>
      {isShowModal === true ? (
        <AddModal
          isShowModal={isShowModal}
          handleHideModal={(value) => {
            setIsShowModal(false);
          }}
        ></AddModal>
      ) : null}
      {isShowDetailModal === true ? (
        <DetailPlanetModal
          detailData={detailData}
          isShowDetailModal={isShowDetailModal}
          handleHideDetailModal={(value) => {
            setIsShowDetailModal(false);
          }}
        ></DetailPlanetModal>
      ) : null}
    </div>
  );
}

export default Planets;
