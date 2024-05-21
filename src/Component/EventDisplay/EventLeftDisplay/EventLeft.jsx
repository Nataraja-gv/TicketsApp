import React from "react";
import "./EventLeft.css";
import scanner from "./tqscanner.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const EventLeft = ({ props }) => {
  return (
    <div className="Eventleft-main-container">
      <div className="eventleft-first-image-container">
        <img src={props.Image} alt="" className="eventleft-first-image " />
        <Link to="/"> <div className="eventLeft-back-section">
          <IoArrowBackOutline  className="event-exit-left-image"/> 
        </div></Link>
      </div>

      <div className="event-left-details-container">
        <h1>Event Details</h1>

        <ul>
          <li>
            Live DJ Sets: <span> Our lineup features some of the most talented and
            sought-after DJs in the industry, each bringing their unique style
            to the stage. From deep house to techno, trance to funk-infused
            beats, they'll take you on an unforgettable sonic journey.</span>
          </li>
          <li>
            State-of-the-Art Visuals: <span> Prepare to be mesmerized by cutting-edge
            visual projections that sync perfectly with the music, creating a
            multisensory experience that will transport you to a world of
            vibrant colors and captivating visuals.</span>
          </li>
          <li>
            Interactive Dance Zones: <span> We've set up dedicated dance zones with
            immersive lighting and pulsating sound systems, ensuring that you'll
            find the perfect spot to let loose and dance to your heart's
            content.</span>
          </li>
          <li>
            Artisanal Food and Drinks: <span> Take a break from the dance floor and
            indulge in a variety of delectable bites and crafted cocktails from
            our top-notch culinary and mixology teams.</span>
          </li>
          <li>

            Chillout Lounge: <span> Need a breather? Visit our chillout lounge area,
            where you can relax, recharge, and socialize with fellow music
            enthusiasts. Unwind while still being enveloped in the event's
            electrifying atmosphere.</span>
          </li>
        </ul>
      </div>

      <div className="eventLeft-MenuDetails-container">
        <h1>Menu Details</h1>
        <ul>
          <li>
            Live DJ Sets:<span>  Our lineup features some of the most talented and
            sought-after DJs in the industry, each bringing their unique style
            to the stage. From deep house to techno, trance to funk-infused
            beats, they'll take you on an unforgettable sonic journey.</span>
          </li>
          <li>
            State-of-the-Art Visuals: <span> Prepare to be mesmerized by cutting-edge
            visual projections that sync perfectly with the music, creating a
            multisensory experience that will transport you to a world of
            vibrant colors and captivating visuals.</span>
          </li>
          <li>
            Interactive Dance Zones: <span>  We've set up dedicated dance zones with
            immersive lighting and pulsating sound systems, ensuring that you'll
            find the perfect spot to let loose and dance to your heart's
            content.</span>
          </li>
          <li>
            Artisanal Food and Drinks: <span> Take a break from the dance floor and
            indulge in a variety of delectable bites and crafted cocktails from
            our top-notch culinary and mixology teams.</span>
          </li>
          <li>
            Chillout Lounge: <span> Need a breather? Visit our chillout lounge area,
            where you can relax, recharge, and socialize with fellow music
            enthusiasts. Unwind while still being enveloped in the event's
            electrifying atmosphere.</span>
          </li>
        </ul>
      </div>

      <div className="eventLeft-scanner-container">
        <img src={scanner} className="eventlef-scanner-image" />
      </div>
      <div className="eventleft-terms-container">
        <h3>Terms & Conditions</h3>
        <BiSolidDownArrow className="eventleft-logo" />
      </div>

      <div className="eventleft-cancel-container">
        <h3> Cancellation Policy</h3>
        <BiSolidDownArrow className="eventleft-logo" />
      </div>
    </div>
  );
};

export default EventLeft;
