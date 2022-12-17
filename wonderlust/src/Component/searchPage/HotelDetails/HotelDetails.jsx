import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import trvloLogo from "../HotelsList/gitWanderlust.gif";
import { useDispatch, useSelector } from "react-redux";

import AboutHotel from "./AboutHotel";
import FetchDataAxios from "../FetchDataAxios";
import { getHotelDetailsAction } from "../../../Redux/Hotel_Search/actionsHotelSearch";
const url = `localhost:8080/hotel`;

const HotelDetails = () => {
  const { id } = useParams();
  console.log("id:", id);
  const [hotelData, setHotelData] = useState([]);
  const { loading_Detail, hotelDetail } = useSelector((state) => state.hotel_details);
  console.log('hotelDetail:', hotelDetail)

  // const { hotelData } = FetchDataAxios(`${url}/${id}`)
  // console.log('hotelData[0]:', hotelData[0])
  // console.log('hotelData:', hotelData)
  const dispatch = useDispatch();

  useEffect(() => {


    if (loading_Detail) {
      dispatch(getHotelDetailsAction(id));
    }
  }, [dispatch, loading_Detail]);

  console.log('loading_Detail:', loading_Detail)


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
      {!loading_Detail  ? (
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
