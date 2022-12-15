import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const NoDataFound = () => {
  let img = "https://cdn.dribbble.com/users/1372590/screenshots/3569723/artboard_copy_2.jpg";
  return (
    <Card sx={{ maxWidth: 345, display: "flex", alignItems: "center", margin: "auto", marginTop: "200px" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            No Data Found, Sorry
          </Typography>
          <Typography variant="body2" color="text.secondary">
            For Inconvenience
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoDataFound;
