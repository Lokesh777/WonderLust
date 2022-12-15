
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
//   ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {  
    // Route,
     Link, 
    //  Routes 
    } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
// import HomeIcon from "@material-ui/icons/Home";
// import SchoolIcon from "@material-ui/icons/School";
// import PersonIcon from "@material-ui/icons/Person";
// import BookmarksIcon from "@material-ui/icons/Bookmarks";
// import BackpackIcon from '@mui/icons-material/Backpack';
// import HotelIcon from '@mui/icons-material/Hotel';
// import KayakingIcon from '@mui/icons-material/Kayaking';
// import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
// import FlightIcon from '@mui/icons-material/Flight';
// import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Grid } from "@mui/material";
// import styles from "./styles.module.css";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    // textAlign:"center"

  },
  leftNavBtn:{
    fontSize:"18px",
    fontWeight:"500"
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const [state,setAnchor] = useState({anchor:null});  
 
 

 const handleMenu = event => {
    setAnchor({ anchor: event.currentTarget });
    console.log(event.currentTarget)
  };

//  const handleClose = () => {
//     setAnchor({ anchor: null });
//   };


//   const handleMenu1 = (event) => {
//     setAnchor(event.currentTarget);
//   };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
   
          <AppBar>
            <Toolbar style={{display:"flex",justifyContent:"space-between",backgroundColor:'#d1c2d9' }} >
               <Grid style={{display:"flex",justifyContent:"space-between",gap:"3rem" }}>
                     <Typography
                        variant="h5"
                        component="p"
                        color="textSecondary"
                        className={classes.title}
                        >
                                <img style={{width:'4rem'}} src="travel.gif" alt="WonderLust"  />
                    
                                    
                        </Typography>
                  
                    

               </Grid>
                  

              <Grid>
                 
                    {isMobile ? (
                        <>
                        <IconButton
                            color="textPrimary"
                            className={classes.menuButton}
                            edge="start"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchor={anchor}
                            anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                            }}
                            KeepMounted
                            transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                            }}
                            open={open}
                        >
                            {/* <MenuItem
                              onClick={() => setAnchor(null)}
                            component={Link}
                            >   
                             <Typography variant="h6">More Travel <KeyboardArrowDownIcon/>  </Typography>                               
                            </MenuItem> */}
                       
                            <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/support"
                            >
                            <Typography variant="h6"> Support </Typography>

                            </MenuItem>

                            <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/trip"
                            >
                           
                            <Typography variant="h6"> Trip</Typography>
                            </MenuItem>
                           
                            <MenuItem
                                onClick={() => setAnchor(null)}
                                component={Link}
                                to="/login"
                            >
                                <Typography variant="h6"> Login </Typography>
                            </MenuItem>
                        </Menu>
                        </>
                    ) : (
                        <div style={{ marginRight: "2rem" }}>
                        {/* <Button
                            variant="text"
                            component={Link}
                            // to="/"
                            color="default"
                        >
                            More Travel<KeyboardArrowDownIcon/>
                        </Button> */}
                        <Button
                            variant="text"
                            component={Link}
                            to="/support"
                            color="default"
                            className={classes.leftNavBtn}
                        >
                            Support
                        </Button>
                        <Button
                            variant="text"
                            component={Link}
                            to="/trip"
                            color="default"
                            className={classes.leftNavBtn}
                        >
                            Trip
                        </Button>
                        <Button
                            variant="text"
                            component={Link}
                            to="/login"
                            color="default"
                            className={classes.leftNavBtn}
                        >
                            Login
                        </Button>
                        </div>
                    )}

 {/* <Typography
                        variant="h5"
                        component="p"
                        color="textSecondary"
                        className={classes.title}
                    >
                                    <Button color="inherit" 
                                        onClick={handleMenu1}
                                        className={styles.buttonFontSize}>
                                        More Travel<KeyboardArrowDownIcon/> 
                                    </Button>
        
                                    <Menu
                                        style={{backgroundColor:'#d1c2d9'}}
                                        id="menu-appbar"
                                        anchor={anchor}
                                        anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >

                                        <MenuItem 
                                            onClick={handleClose}
                                            ><FlightIcon/>  Flights
                                        </MenuItem>
                                        
                                        <MenuItem 
                                            onClick={handleClose}
                                            ><TimeToLeaveIcon/> Cars
                                        </MenuItem>
                                        
                                        <MenuItem 
                                            onClick={handleClose}
                                            > <HotelIcon/>  Hotels
                                        </MenuItem>
                                        
                                        <MenuItem 
                                            onClick={handleClose}
                                            > <BackpackIcon/> Packages
                                        </MenuItem>

                                        <MenuItem 
                                            onClick={handleClose}
                                            > <KayakingIcon/> Cruises
                                        </MenuItem>

                                        <MenuItem 
                                            onClick={handleClose}
                                            ><DriveFileRenameOutlineIcon/> Things Todo
                                        </MenuItem>



                                    </Menu>
                                
                       </Typography> */}

              </Grid>
            </Toolbar>
          </AppBar>
          
      {/* <--------------routing---------     */}

          {/* <Routes> */}
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/College" component={College} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Personal" component={Personal} /> */}
          {/* </Routes> */}

      </HideOnScroll>
    </div>
  );
};


export default Navbar;



   