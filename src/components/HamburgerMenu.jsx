import React, { useState } from "react";

const HamburgerMenu = ({ isMobileOpen, setIsMobileOpen, hamburgerHandler }) => {
  return (
    <div className="hamburgerMenu">
      <div className="hamburgerIcon" onClick={hamburgerHandler}>
        <span className={`bar ${isMobileOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMobileOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMobileOpen ? "open" : ""}`}></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
