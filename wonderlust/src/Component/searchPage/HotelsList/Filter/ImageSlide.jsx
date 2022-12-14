import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageSlide = ({ data }) => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        keyBoardControl={true}
      >
        <img
          textAlign={"center"}
          style={{ height: "170px", width: "500px", padding: "10px" }}
          src={"https://us06st2.zoom.us/static/6.3.10195/image/Zoom_Blue_Logo.png"}
          alt="nm"
        />
        <img
          textAlign={"center"}
          style={{ height: "170px", width: "500px", padding: "10px" }}
          src={"https://us06st2.zoom.us/static/6.3.10195/image/Zoom_Blue_Logo.png"}
          alt="nm"
        />
        <img
          textAlign={"center"}
          style={{ height: "170px", width: "500px", padding: "10px" }}
          src={"https://us06st2.zoom.us/static/6.3.10195/image/Zoom_Blue_Logo.png"}
          alt="nm"
        />
        <img
          textAlign={"center"}
          style={{ height: "170px", width: "500px", padding: "10px" }}
          src={"https://us06st2.zoom.us/static/6.3.10195/image/Zoom_Blue_Logo.png"}
          alt="nm"
        />
      </Carousel>
    </div>
  );
};

export default ImageSlide;
