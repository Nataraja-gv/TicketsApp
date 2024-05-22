import React from "react";
import { GoHome } from "react-icons/go";
import { GoBell } from "react-icons/go";
import { PiBookLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import "./FooterNavbar.css";

const FooterNavbar = () => {
  return (
    <div className="footernavbar-main-container">
      <div className="footer-home-conatiner">
        <GoHome className="footer-navbar-icon" />
        <h2>Home</h2>
      </div>
      <div className="footer-Notification-conatiner">
        <GoBell className="footer-navbar-icon" />
        <h2>Notifications</h2>
      </div>
      <div className="footer-MyBooking-conatiner">
        <PiBookLight className="footer-navbar-icon" />
        <h2>My Bookings</h2>
      </div>
      <div className="footer-Profile-conatiner">
        <CgProfile className="footer-navbar-icon" />
        <h2>Profile</h2>
      </div>
    </div>
  );
};

export default FooterNavbar;
