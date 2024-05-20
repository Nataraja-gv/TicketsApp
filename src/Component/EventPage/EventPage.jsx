import React, { useContext } from "react";
import "./EventPage.css";
import { EventContext } from "../Context/Context";
import Event from "../Pages/Event";
import { Link } from "react-router-dom";

const EventPage = () => {
  const { eventDetails } = useContext(EventContext);

  return (
    <div className="Event-page-main-container">
      {eventDetails.map((item, index) => {
        return (
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
        );
      })}
    </div>
  );
};

export default EventPage;
