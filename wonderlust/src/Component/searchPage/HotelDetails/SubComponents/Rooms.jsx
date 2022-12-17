import React from "react";
import styles from "../styles/room.module.css";
// import styles from '../styles/subHotelDetails.module.css'

import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
// import PoolIcon from '@mui/icons-material/Pool';

import { BiInfoCircle } from "react-icons/bi";

// import FormControlLabel from '@material-ui/core/FormControlLabel'
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { LocationCityIcon } from "@mui/icons-material";

import WifiIcon from "@mui/icons-material/Wifi";
import HotelIcon from "@mui/icons-material/Hotel";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DoneIcon from "@mui/icons-material/Done";
import { Modal, styled, Box, RadioGroup, Radio, FormControlLabel, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useDispatch } from "react-redux";
// import { paymentType } from '../../Store/Action'
import { useNavigate } from "react-router-dom";

const Tyed = styled(Typography)`
  color: gray;
  font-weight: 600;
`;

const Rooms = ({ room, hId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(room.roomPrice + price)
  const totalPrice = room.roomPrice + price;
  // console.log('totalPrice:', totalPrice)

  const handleOpen = () => {
    // dispatch(paymentType(totalPrice))
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePricesInc = () => {
    setPrice(118);
  };
  const handlePricesDec = () => {
    setPrice(0);
  };
  const handlePaymentPage = () => {
    // navigate('/payment')
  };

  const handleOpenRoom = (id) => {
    // history.push('roomPage')
    // dispatch(paymentType(totalPrice))
    navigate(`/hotels/${hId}/${id}`);
    // console.log(id, hId)
  };

  const modal = (
    <div className={styles.modal}>
      <Box className={styles.flex_box}>
        <CloseIcon onClick={handleClose} />
        <p>Your payment options</p>
      </Box>
      <Box className={styles.flex_3}>
        <DoneIcon />
        <div>
          <h4>Fully refundable before Sat, Sep 11</h4>
          <p>You can change or cancel this stay if plans change. Because flexibility matters.</p>
        </div>
      </Box>
      <Box className={styles.flex_4}>
        <div>
          <h4>Pay now</h4>
          <ul>
            <li>We will process your payment in your local currency</li>
            <li>More ways to pay: use Debit/Credit card</li>
            <li>You can use a valid Travelocity coupon</li>
          </ul>
        </div>
        <div>
          <h3 style={{ margin: "0", padding: "0" }}>${room.roomPrice}</h3>
          <small>per night</small>
          <small style={{ fontWeight: "bold" }}>${room.roomPrice + price} total</small>
          <small>included tax & fees</small>
          <button style={{ width: "100px", marginLeft: "71px" }} onClick={handlePaymentPage}>
            Pay now
          </button>
        </div>
      </Box>
      <Box className={styles.flex_4}>
        <div>
          <h4>Pay when you stay</h4>
          <ul>
            <li>You will not be charged until your stay</li>
            <li>Pay the property directly in their local currency</li>
          </ul>
        </div>
        <div>
          <h3 style={{ margin: "0", padding: "0" }}>${room.roomPrice}</h3>
          <small>per night</small>
          <small style={{ fontWeight: "bold" }}>${room.roomPrice + price} total</small>
          <small>included tax & fees</small>
          <button style={{ width: "140px", marginLeft: "31px" }} onClick={handlePaymentPage}>
            Pay at property
          </button>
        </div>
      </Box>
    </div>
  );

  return (
    <div>
      <div className={styles.room_div}>
        <img src={room.images[0]} alt="d" />
        <div className={styles.room_details}>
          <h3 style={{ fontSize: "17px", marginTop: "10px", textTransform: "uppercase", fontWeight: "600" }}>{room.name}</h3>
          <p style={{ marginTop: "10px" }}>4.7 / 5 guest room rating</p>
          <Box style={{ display: "flex", gap: "10px", marginTop: "10px", textAlign: "left", fontSize: "10px", fontWeight: "500" }}>
            <Box style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed className="itemsTypo">2 Twin beds</Tyed>
              </Box>
              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed>Free wifi</Tyed>
              </Box>
              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed>Breakfast buffet</Tyed>
              </Box>

              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed>Reserve now, pay deposit</Tyed>
              </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed>free self parking</Tyed>
              </Box>
              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed>{Math.floor(Math.random() * 300 + 99)} Square fit</Tyed>
              </Box>
              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed>City view</Tyed>
              </Box>
              <Box className={styles.flex_1}>
                <DoneIcon />
                <Tyed>Sleep 3</Tyed>
              </Box>
            </Box>
          </Box>
          {/* <Box style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>{Math.floor(Math.random() * 300 + 99)} Square fit</p>
            </Box>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>City view</p>
            </Box>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>Sleep 3</p>
            </Box>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>2 Twin beds</p>
            </Box>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>Free wifi</p>
            </Box>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>Breakfast buffet</p>
            </Box>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>free self parking</p>
            </Box>
            <Box className={styles.flex_1}>
              <DoneIcon />
              <p>Reserve now, pay deposit</p>
            </Box>
          </Box> */}
          <Box style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
            <Box className={styles.flex_1} style={{ marginTop: "10px" }}>
              <p className={styles.green}>Fully refundable</p>
              <span>
                <BiInfoCircle />
              </span>
            </Box>
            <small>Before sun, 5 sep</small>
            <Box className={styles.flex_1}>
              <p className={styles.more} onClick={handleOpenRoom}>
                More details
              </p>
              <span>
                <MdNavigateNext />
              </span>
              <Box></Box>
            </Box>
          </Box>

          <div className={styles.extra}>
            <h4>Extras</h4>
            <div className={styles.line} style={{ marginTop: "20px" }}></div>

            <RadioGroup aria-label="price" name="price_1">
              <Box className={styles.flex_2}>
                <FormControlLabel value="noExtra" control={<Radio color="primary" />} label="One-way airport transfer" onChange={handlePricesDec} />
                <p>+ $0</p>
              </Box>
              <Box className={styles.flex_2}>
                <FormControlLabel value="halfBoard" control={<Radio color="primary" />} label="Half Board" onChange={handlePricesInc} />
                <p>+ $118</p>
              </Box>
            </RadioGroup>
            <h3 className={styles.h3_price}>${room.roomPrice + price}</h3>
            <div className={styles.flex_2}>
              <div className={styles.flex_small}>
                <small>per night</small>
                <small style={{ fontWeight: "bold", marginBottom: "5px" }}>${room.roomPrice + price} total</small>
                <small>include tax & fees</small>
              </div>
              <button onClick={handleOpen}>Reserve</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
          {modal}
        </Modal>
      </div>
    </div>
  );
};

export default Rooms;
