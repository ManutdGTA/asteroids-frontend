import React, { useEffect, useState } from "react";
import "./miners.css";
import { getMiners, getMinerDetail } from "./api/api";
import DetailModal from "./detailModal.js";

function Miners() {
  const [minersList, setMinersList] = useState([]);
  const [detailData, setDetailData] = useState([]);

  const [isShowModal, setIsShowModal] = useState(false);
  useEffect(() => {
    handleGetMiners();
  }, []);
  const handleGetMiners = async () => {
    const res = await getMiners({});
    if (res) {
      console.log(res);
      setMinersList(res);
    }
  };
  const handleShowDetail = async (v) => {
    console.log(v);
    const res = await getMinerDetail(v._id);
    if (res) {
      console.log(res);
      setDetailData(res);
      setIsShowModal(true);
    }
  };
  const handleshowModal = () => {
    setIsShowModal(true);
  };
  return (
    <div className="miners">
      <div className="miners_header">
        <span>Name</span>
        <span>Planet</span>
        <span>carryCapacity</span>
        <span>travelSpeed</span>
        <span>miningSpeed</span>
        <span>Position</span>
        <span>Status</span>
      </div>
      <div className="white_line"></div>
      {minersList.map((v) => (
        <div key={v._id}>
          <div className="miners_row">
            <span className="title" onClick={handleShowDetail.bind(this, v)}>
              {v.name}
            </span>
            <span className="value">{v.planet.substr(-1)}</span>
            <span className="value">{v.carryCapacity}/200</span>
            <span className="value">{v.travelSpeed}</span>
            <span className="value">{v.miningSpeed}</span>
            <span className="value">
              {v.x},{v.y}
            </span>
            <span className="value">{v.status}</span>
          </div>
          <div className="white_line"></div>
        </div>
      ))}
      <div className="white_line"></div>
      {isShowModal === true ? (
        <DetailModal
          isShowModal={isShowModal}
          detailData={detailData}
          handleHideModal={(value) => {
            setIsShowModal(false);
          }}
        ></DetailModal>
      ) : null}
    </div>
  );
}

export default Miners;
