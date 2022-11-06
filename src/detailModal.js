import React, { useState } from "react";
import Close from "./assets/close.png";
import "./detailModal.css";
import { postMiners } from "./api/api";

function DetailModal(props) {
  const { handleHideModal, detailData } = props;

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
        <p className="title">History of {detailData.name}</p>
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
export default DetailModal;
