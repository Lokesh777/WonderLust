import React, { useState } from "react";

import styles from "../styles/subHotelDetails.module.css";
import Modal from "@mui/material/Modal";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import HotelOverview from "./HotelOverView";
import AboutArea from "./AboutArea";
import Rooms from "./Rooms";
import { useNavigate } from "react-router-dom";

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
    localStorage.removeItem("searchQuery");

    // console.log("handleReserve:", handleReserve);
    localStorage.setItem("hotelBooking", JSON.stringify(hotelData));
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const modal = (
    <div className={styles.modal}>
      <CloseIcon className={styles.close} onClick={handleClose} />
      <FaChevronLeft className={styles.right_arrow} onClick={prevSlide} />
      <FaChevronRight className={styles.left_arrow} onClick={nextSlide} />
      <div className={styles.modal_img}>
        {images.map((slide, index) => {
          return <div key={index}>{index === current && <img src={slide} alt="hotelImages" />}</div>;
        })}
      </div>
    </div>
  );

  return (
    <>
      <div className="slider"></div>
      <div className={styles.flex} onClick={handleOpen} style={{ cursor: "pointer" }}>
        <div className={styles.left}>
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
        </div>
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

      {/* <div id="location">
                <AboutArea />
            </div>
            <div id="amenities">
                <Amenities />
            </div>
            <div id="policies">
                <Policies />
            </div>
            <div id="reviews">
                <Review />
            </div> */}

      <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
        {modal}
      </Modal>
    </>
  );
};

export default SubHotelDetails;
