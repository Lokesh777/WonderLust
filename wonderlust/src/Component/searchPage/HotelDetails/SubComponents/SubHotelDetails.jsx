import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/subHotelDetails.module.css";
import Modal from "@mui/material/Modal";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import HotelOverview from "./HotelOverView";
import AboutArea from "./AboutArea";
import Rooms from "./Rooms";
import { useNavigate } from "react-router-dom";
import { Box, styled } from "@mui/material";
import Carousel from "react-multi-carousel";

const responsive = {
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

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "540px",
  [theme.breakpoints.down("md")]: {
    ObjectFit: "cover",
    height: "160px",
  },
}));
const SubHotelDetails = ({ hotelData, id }) => {
  let navigate = useNavigate();
  // console.log("SubHotelDetails:", hotelData);

  const { images } = hotelData;
  // console.log('images:', images)
  // images

  const options = [
    { title: "Overview", to: "#" },
    { title: "Rooms", to: "#rooms" },
    { title: "Location", to: "#location" },
    { title: "Amenities", to: "#amenities" },
    { title: "Policies", to: "#policies" },
    { title: "Reviews", to: "#reviews" },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // console.log('handleOpen:', handleOpen)
    // setOpen(true);
  };
  const handleClose = () => {
    // console.log('handleClose:', handleClose)
    // setOpen(false);
  };

  const [current, setCurrent] = useState(0);
  const length = images.length - 1;

  const handleReserve = () => {
    // navigate(`/hotels`);
    navigate(`/checkout`);
    // localStorage.removeItem("searchQuery");

    // console.log("handleReserve:", handleReserve);
    // localStorage.setItem("hotelBooking", JSON.stringify(hotelData));
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <div style={{ display: "grid", justifyContent: "center", marginRight: "20px" }}>
        <div className="slider"></div>
        <div className={styles.flex} onClick={handleOpen} style={{ cursor: "pointer", margin: "auto" }}>
          <div style={{ width: "1200px", height: "500px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              containerClass="carousel-container"
            >
              {images.map((data, id) => (
                <Image style={{ height: "500px" }} key={id} src={data} alt={"banner"}></Image>
              ))}
            </Carousel>
          </div>

          {/* <div className={styles.left}>
          <img src={hotelData.images[0]} alt="" />
        </div>
        <div className={styles.right}>
          <div>
            <img src={hotelData.images[1]} alt="" />
          </div>
          <div>
            <img src={hotelData.images[2]} alt="" />
          </div>
          <div>
            <img src={hotelData.images[3]} alt="" />
          </div>
          <div>
            <img src={hotelData.images[4]} alt="" />
          </div>
        </div> */}
        </div>
        <div className={styles.option}>
          {options.map((option, i) => (
            <p key={i}>
              <a href={option.to}>{option.title}</a>
            </p>
          ))}
          {/* <button className={styles.optionBtn}>
          <a href="#rooms">Reserve a room</a>
        </button> */}
        </div>

        <div className={styles.flex} style={{ background: "#FFF", borderRadius: "0 0 10px 10px" }}>
          <div className={styles.left_1} id="overview">
            <HotelOverview hotelData={hotelData} />
          </div>
          <div className={styles.right_1}>{/* <HotelMap hotelData={hotelData} /> */}</div>
        </div>

        <div className={styles.room_grid} id="rooms">
          {hotelData.rooms.map((room) => (
            <Rooms key={room.size} handleReserve={handleReserve} room={room} hId={id} />
          ))}
        </div>

        <div id="location">
          <AboutArea />
        </div>
      </div>
    </>
  );
};

export default SubHotelDetails;
