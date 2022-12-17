import React from "react";
import styles from "./styles/mainHotel.module.css";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from "react-router";
import SubHotelDetails from "./SubComponents/SubHotelDetails";
import Ads from "../HotelsList/Filter/Ad";
import { Button } from "@mui/material";

const AboutHotel = ({ hotelDetail, id }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainBox}>
          <div className={styles.content}>
            <div className={styles.flex}>
              <Button onClick={() => navigate("/hotels")}>GoBack</Button>
              <p className={styles.ptag} onClick={() => navigate("/hotels")}>
                See all properties
              </p>
            </div>
            <SubHotelDetails hotelData={hotelDetail} id={id} />
          </div>
          <div>
            {/* <div style={{ position: "sticky", top: "10px" }}>
              <img src="https://tpc.googlesyndication.com/simgad/18356432804528933170" alt="ads" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHotel;
