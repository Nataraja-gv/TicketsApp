import React from "react";
import "./MobileNavbar.css";
import ticketsque from "../../assets/ticketlogo.png"
import sidebar from "../../assets/charm_menu-hamburger.png";


const Mobilenavbar = () => {
  return (
    <div className="mobile-navbar-container">
      <div className="mobile-nvbar-top-section">
        <div className="mobile-navbar-title-containar">
          <img src={ticketsque} className="mobile-navbar-website-logo" />
        </div>
        <div className="mobile-navbar-sidebar-section">
          <img src={sidebar} className="mobile-navbar-sidebar-icon" />
        </div>
      </div>

      <div className="mobilenavbar-bottom-input-section"></div>
    </div>
  );
};

export default Mobilenavbar;
