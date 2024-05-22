import React, { useState } from "react";
import { GoHome, GoBell } from "react-icons/go";
import { PiBookLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import "./FooterNavbar.css";
import { Link } from "react-router-dom";

const FooterNavbar = () => {
  const [active, setActive] = useState();

  const handleIconClick = (icon) => {
    setActive(icon);
  };

  return (
    <div className="footernavbar-main-container">
      <Link to="/">
        <div
          className="footer-home-container"
          onClick={() => handleIconClick("home")}
        >
          <GoHome
            className="footer-navbar-icon"
            style={{ color: active === "home" ? "#590080" : "white" }} 
          />
          <h2 style={{ color: active === "home" ? "#590080" : "white" }}>Home</h2>
        </div>
      </Link>
      <div
        className="footer-notification-container"
        onClick={() => handleIconClick("notifications")}
      >
        <GoBell
          className="footer-navbar-icon"
          style={{ color: active === "notifications" ? "#590080" : "white" }}
        />
        <h2 style={{ color: active === "notifications" ? "#590080" : "white" }}>Notifications</h2>
      </div>
      <div
        className="footer-mybooking-container"
        onClick={() => handleIconClick("bookings")}
      >
        <PiBookLight
          className="footer-navbar-icon"
          style={{ color: active === "bookings" ? "#590080" : "white" }}
        />
        <h2 style={{ color: active === "bookings" ? "#590080" : "white" }}>My Bookings</h2>
      </div>
      <div
        className="footer-profile-container"
        onClick={() => handleIconClick("profile")}
      >
        <CgProfile
          className="footer-navbar-icon"
          style={{ color: active === "profile" ? "#590080" : "white" }}
        />
        <h2 style={{ color: active === "profile" ? "#590080" : "white" }}>Profile</h2>
      </div>
    </div>
  );
};

export default FooterNavbar;
