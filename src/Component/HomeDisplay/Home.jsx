import React from "react";
import "./Home.css";
import Slider from "../Slider/Slider";
import Featured from "../FeaturedEvent/Featured";
import EventPage from "../EventPage/EventPage";
import EventBangalore from "../EventBangalore/EventBangalore";
const Home = () => {
  return (
    <div className="Home-main-container">
      <div>
        <Slider />
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <EventPage />
      </div>

      <div>
        <EventBangalore />
      </div>
    </div>
  );
};

export default Home;
