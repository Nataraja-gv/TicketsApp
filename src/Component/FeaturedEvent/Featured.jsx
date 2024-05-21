import React from "react";
import "./Featured.css";

const Featured = () => {
  const events = [
    "All Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
    "New Year Events",
  ];

  return (
    <div className="Featured-main-container">
      <div className="Featured-top-container">
        <h2>Featured Events</h2>
        <p>view all</p>
      </div>
      <ul className="Featured-bottom-container">
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>

      <ul className="Featured-mobile-bottom-container">
        {events.slice(0, 3).map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default Featured;
