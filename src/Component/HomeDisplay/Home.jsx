import React, { useContext } from "react";
import "./Home.css";
import Slider from "../Slider/Slider";
import Featured from "../FeaturedEvent/Featured";
import EventPage from "../EventPage/EventPage";
// import EventBangalore from "../EventBangalore/EventBangalore";
import EventCommon from "../common-card/Common_Card";
import { EventContext } from "../Context/Context";

const Home = () => {
  const { eventDetails } = useContext(EventContext);

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
        <EventCommon title={"Events In Bangaluru"} items={eventDetails} />
      </div>
    </div>
  );
};

export default Home;
