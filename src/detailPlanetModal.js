import React, { useState } from "react";
import Close from "./assets/close.png";
import "./detailPlanetModal.css";
import { postMiners } from "./api/api";

function DetailPlanetModal(props) {
  const { handleHideDetailModal, detailData } = props;
  return (
    <div className="modal">
      <div className="modal-block">
        <img
          src={Close}
          className="close"
          alt="logo"
          onClick={() => {
            handleHideDetailModal(false);
          }}
        />
        <p className="title">List of miners of {detailData[0].name}</p>
        <div className="miners_header">
          <span>Name</span>
          <span>carryCapacity</span>
          <span>travelSpeed</span>
          <span>miningSpeed</span>
          <span>Position</span>
          <span>Status</span>
        </div>
        <div className="white_line"></div>
      </div>
    </div>
  );
}
export default DetailPlanetModal;
