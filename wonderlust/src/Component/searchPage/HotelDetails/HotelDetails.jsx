import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import trvloLogo from "../HotelsList/gitWanderlust.gif";
import { useDispatch, useSelector } from "react-redux";

import AboutHotel from "./AboutHotel";
import { getHotelDetailsAction } from "../../../Redux/Hotel_Search/actionsHotelSearch";
// const url = `localhost:8080/hotel`;

const HotelDetails = () => {
  const { id } = useParams();
  console.log("id:", id);

  const { loading_Detail, hotelDetail } = useSelector((state) => state.hotel_details);
  // console.log('hotelDetail:', hotelDetail)

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading_Detail && id) {
      dispatch(getHotelDetailsAction(id));
    }
  }, [dispatch, loading_Detail, id]);

  // console.log('loading_Detail:', loading_Detail)

  const styles = {
    progress: {
      width: "20%",
      margin: "200px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    img: {
      width: "100px",
    },
  };

  return (
    <>
      {!loading_Detail ? (
        <div>
          <AboutHotel hotelDetail={hotelDetail} id={id} />
        </div>
      ) : (
        <div style={styles.progress}>
          <img src={trvloLogo} alt="" style={styles.img} />
          <CircularProgress color="secondary" />
        </div>
      )}
    </>
  );
};

export default HotelDetails;
