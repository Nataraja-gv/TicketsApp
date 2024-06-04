// import React, { useContext } from "react";
import Event from "../Pages/Event";
import "../Pages/Style/EventBangaluru.css";
import { Link } from "react-router-dom";

const EventBangalore = ({ items = [], title }) => {
  return (
    <div className="event-bangalore-main-container">
      <div className="event-first-container">
        <div className="Featured-top-container">
          <h2>{title}</h2>
          <p>view all</p>
        </div>
      </div>

      <div className="event-Second-container">
        {items.map((item, index) => {
          return (
            <Link to={`/EventDisplay/${item.id}`} key={index}>
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
