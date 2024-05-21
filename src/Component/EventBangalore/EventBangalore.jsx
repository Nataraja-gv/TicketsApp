import React, { useContext } from "react";
import Event from "../Pages/Event";
import { EventContext } from "../Context/Context";
import "./EventBangaluru.css";
import { Link } from "react-router-dom";

const EventBangalore = () => {
  const { eventDetails } = useContext(EventContext);

  return (
    <div className="event-bangalore-main-container">
      <div className="event-first-container">
        <div className="Featured-top-container">
          <h2> Events In Bangaluru</h2>
          <p>view all</p>
        </div>
      </div>

      <div className="event-Second-container">
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
    </div>
  );
};

export default EventBangalore;
