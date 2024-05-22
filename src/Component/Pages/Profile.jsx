import React from "react";
import "./Style/Profile.css";
import { SiGnuprivacyguard } from "react-icons/si";
import { LuHistory } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Profile = () => {
  return (
    <div className="profile-main-conatiner">
      <div className="profile-top-container">
        <div className="Profile-top-image-section">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/bcci/1000x1280/164.png"
            alt=" "
            className="profile-image"
          />
        </div>
        <h1>Virat Kolhi</h1>
        <p>kingkolhi@gmail.com</p>
        <button>Upgrade to PRO</button>
      </div>

      <div className="profile-bottom-container">
        <div className="profile-btn-section">
          <div className="profile-btn-first">
            <SiGnuprivacyguard />
            <p>Privacy</p>
          </div>

          <MdOutlineKeyboardArrowRight />
        </div>
        <div className="profile-btn-section">
          <div className="profile-btn-first">
            <LuHistory />
            <p>Booking History</p>
          </div>
          <MdOutlineKeyboardArrowRight />

        </div>
        <div className="profile-btn-section">
          <div className="profile-btn-first">
            <IoMdHelpCircleOutline />
            <p>Help & Support</p>
          </div>
          <MdOutlineKeyboardArrowRight />

        </div>

        <div className="profile-btn-section">
          <div className="profile-btn-first">
            <IoSettingsOutline />
            <p>Setting</p>
          </div>
          <MdOutlineKeyboardArrowRight />
          
        </div>
        <div className="profile-btn-section">
          <div className="profile-btn-first">
            <IoMdLogOut />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
