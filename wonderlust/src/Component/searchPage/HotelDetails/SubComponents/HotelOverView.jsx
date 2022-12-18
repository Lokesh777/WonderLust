import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import { MdNavigateNext } from "react-icons/md";
import StarIcon from "@mui/icons-material/Star";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Box, styled } from "@mui/material";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

const Hd = styled(Typography)`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  padding: 10px;
`;

const HotelOverview = ({ hotelData }) => {
  return (
    <Card sx={{ maxWidth: "90%" }}>
      <Hd variant="h6">{hotelData.name}</Hd>
      <Box style={{ marginLeft: "10px" }}>
        {new Array(Number(hotelData.starRating)).fill(0).map((i) => (
          <StarIcon color="secondary" fontSize="small"></StarIcon>
        ))}
        <h3>
          {hotelData.starRating}/5{" "}
          {hotelData.starRating > 4 ? "Wonderful" : hotelData.starRating > 3 ? "Good" : hotelData.starRating > 3 ? "Average" : "Poor"}
        </h3>
        <p style={{ color: "#505c66", fontSize: "14px" }}>Guests rated this property 4.7/5 for cleanliness.</p>
        <Box>
          <p> {Math.floor(Math.random() * 1000 + 1)} reviews </p>
          <span>
            <MdNavigateNext />
          </span>
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
          Popular amenitie
        </Typography>

        <Box style={{ width: "100%", display: "flex", gap: "50px" }}>
          <Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <AcUnitIcon fontSize="small"></AcUnitIcon> <p>Air Conditioning</p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <PoolIcon fontSize="small"></PoolIcon> <p> Pool For swming</p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <AcUnitIcon fontSize="small"></AcUnitIcon> <p>Air Conditioning</p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <LocalParkingIcon fontSize="small"></LocalParkingIcon> <p>Parking</p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <LunchDiningIcon fontSize="small"></LunchDiningIcon> <p>LunchDining</p>
            </Box>
          </Box>
          <Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <NetworkWifiIcon fontSize="small"></NetworkWifiIcon> <p>Wifi</p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <LocalLaundryServiceIcon fontSize="small"></LocalLaundryServiceIcon> <p>LocalLaundry Service</p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <DryCleaningIcon fontSize="small"></DryCleaningIcon> <p>Dry Cleanin</p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <LocalParkingIcon fontSize="small"></LocalParkingIcon> <p>Local Parking </p>
            </Box>
            <Box style={{ display: "flex", gap: "5px" }}>
              <FreeBreakfastIcon fontSize="small"></FreeBreakfastIcon> <p>Free Break fast</p>
            </Box>
          </Box>
        </Box>
     
      </CardContent>
      <Box>
        <div style={{ display: "flex", gap: "50px",marginLeft:'20px' }}>
          <Box>
            <svg width="22px" height="22px" fill="#505c66">
              <path d="M17.5 2.5L19 4l1.5-1.5L19 1l-1.5 1.5zM19 7l1.2.8L21 9l.8-1.2L23 7l-1.2-.8L21 5l-.8 1.2L19 7zM4 4c0-1.1.9-2 2-2h9v3l-1 .2V9h-1l-.86-3.43L10 6v2l5 5v7a2 2 0 01-2 2H6a2 2 0 01-2-2V10l2-2V6L4 4z"></path>
            </svg>
            <p>Cleaned with disinfectant</p>
          </Box>
          <Box>
            <svg width="22px" height="22px" fill="#505c66">
              <path d="M14 22v-3h2.8a2 2 0 001.76-1.06l1.91-3.6a2 2 0 00-.05-1.97L19 10v-.5a7.5 7.5 0 00-15 0c0 1.5.15 3.64 2 5.37V22h8zm-2.5-7v-3.5h6.65l.98 1.64c.1.15.1.33.02.49l-1.91 3.6a.5.5 0 01-.44.27H14a2.5 2.5 0 01-2.5-2.5z"></path>
            </svg>
            <p>Personal protective equipment</p>
          </Box>
        </div>
      </Box>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
  
};

export default HotelOverview;
