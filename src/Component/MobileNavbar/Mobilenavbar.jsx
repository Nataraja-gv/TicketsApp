import React from "react";
import "./MobileNavbar.css";
import ticketsque from "./mLogo.png"
import search from "./Frame 43.png";


const Mobilenavbar = () => {
  return (
    <div className="mobile-navbar-container">
      <div className="mobile-nvbar-top-section">
        <div className="mobile-navbar-title-containar">
          <img src={ticketsque} className="mobile-navbar-website-logo" />
          <h3>Welcome,Sai</h3>
        </div>
        <div className="mobile-navbar-search-section">
          <img src={search} className="mobile-navbar-search-icon" />
        </div>
      </div>

      {/* <div className="mobilenavbar-bottom-input-section"></div> */}
    </div>
  );
};

export default Mobilenavbar;
