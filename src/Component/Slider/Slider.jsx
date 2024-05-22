import React from "react";
import "./Slider.css";
import s1 from "../../assets/sa1.png";
import s2 from "../../assets/sa2.png";
import s3 from "../../assets/sa3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slider-main-container">
      <Carousel
        responsive={responsive}
        customTransition="all 2s ease in"
        keyBoardControl={true}
        renderDotsOutside={true}
        containerClass="carousel-container"
        infinite={true}
        customDot={<CustomDot />}
        showDots={true}
        autoPlay={true}
        dotListClass={"react-multi-carousel-dot-list custom-dot-list-style"}
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px itemimage"
        removeArrowOnDeviceType={["desktop", "mobile","tablet"]}
      >
        <div className="mobile-carosel-divider">
          <img src={s1} alt="" className="ticket-carousel-image" />
        </div>
        <div className="mobile-carosel-divider">
          <img src={s2} alt="" className="ticket-carousel-image" />
        </div>
        <div className="mobile-carosel-divider">
          <img src={s3} alt="" className="ticket-carousel-image" />
        </div>
      </Carousel>
    </div>
  );
};
export const CustomDot = ({ active }) => (
  <button className={`custom-dot${active ? " active" : ""}`} />
);
export default Slider;
