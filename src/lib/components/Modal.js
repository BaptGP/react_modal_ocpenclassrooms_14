import React, { useState } from "react";
import "./styles/modal.css";

const Modal = ({ isActive, setActive, modalStyle, children }) => {
  const select = {};
  const modal = {
    width: "80vw",
    height: "auto",
    minHeight: "20px",
    position: "absolute",
    zIndex: 2,
    borderRadius: 20,
    boxShadow: "1px 1px 80px gray",
    padding: 20,
    backgroundColor: "white",
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setActive(false);
  };
  return (
    <>
      {isActive && (
        <>
          <div className="back_modal"></div>
          <div
            onClick={handleClick}
            style={{
              width: "100vw",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: 20,
              zIndex: 2,
            }}
          >
            <div
              className="modal"
              style={Object.assign(modal, modalStyle)}
              onClick={(e) => e.stopPropagation()}
            >
              <div>{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
