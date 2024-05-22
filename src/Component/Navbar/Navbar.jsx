import React from "react";
import "./Navbar.css";
import ticketsque from "../../assets/ticketlogo.png";
import SearchLogo from "../../assets/searchLogo.png";
import about from "../../assets/mdi_user.png";
import sidebar from "../../assets/charm_menu-hamburger.png";
import Mobilenavbar from "../MobileNavbar/Mobilenavbar";

const Navbar = () => {
  return (
    <div className="navbar-display-main-container" >
      <div className="Navbar-main-container" >
        <div className="navbar-title-containar">
          <img src={ticketsque} className="navbar-website-logo" />
        </div>

        <div className="navbar-right-side-container">
        
          <div className="navbar-input-container">
            <input
              type="text"
              placeholder="Search for events"
              className="navbar-input-box"
            />
            <img src={SearchLogo} className="navbar-input-searchIcon" />
          </div>

          <div className="navbar-about-logo-section">
            <img src={about} alt="" className="Nvabar-about-logo" />
          </div>

          <div className="navbar-Hi-guest-section">
            <h3>Hi, Guest</h3>
          </div>

          <div className="navbar-sidebar-section">
            <img src={sidebar} className="navbar-sidebar-icon" />
          </div>
        </div>
      </div>

      <div className="navbar-mobile-navbar-section">
        <Mobilenavbar />
      </div>
    </div>
  );
};

export default Navbar;
