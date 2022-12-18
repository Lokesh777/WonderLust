import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const SearchName = ({ qurey  }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={qurey}
          //   secondary={

          //       <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
          //         Ali Connors
          //       </Typography>

          //   }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default SearchName;
