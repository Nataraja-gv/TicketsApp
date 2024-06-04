import React, { useContext } from "react";
import "./EventPage.css";
import { EventContext } from "../Context/Context";
import Event from "../Pages/Event";
import { Link } from "react-router-dom";
import MobileEvent from "../Pages/MobileEvent";

const EventPage = () => {
  const { eventDetails } = useContext(EventContext);

  return (
    <div className="Event-page-main-container">
      {eventDetails.map((item, index) => {
        return (
          <div key={index}>
            <div className="eventpages-desktop-section">
              <Link to={`/EventDisplay/${item.id}`}>
                <Event
                  key={index}
                  Image={item.Image}
                  Price={item.Price}
                  EventName={item.EventName}
                  Location={item.Location}
                  Place={item.Place}
                />
              </Link>
            </div>
            <div className="eventpages-mobile-section">
              <Link to={`/EventDisplay/${item.id}`}>
                <MobileEvent
                  key={index}
                  Image={item.Image}
                  Price={item.Price}
                  EventName={item.EventName}
                  Location={item.Location}
                  Place={item.Place}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventPage;
