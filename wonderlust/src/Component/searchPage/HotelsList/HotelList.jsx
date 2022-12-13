import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import trvloLogo from "./gitWanderlust.gif";

import { Star } from "@mui/icons-material";
// import logo from "../../logo.svg";
import { FormControlLabel, styled, Radio, Button, FormControl, RadioGroup, CircularProgress, Box } from "@mui/material";
import { useCallback } from "react";

import { useNavigate } from "react-router";
import { SearchByProperty } from "./FilterComponents/SearchByProperty";
import { Hotelcard } from "./Hotelcard";
import Ads from "./FilterComponents/Ad";
// import { makeStyles } from '@material-ui/core/styles'
const url = `http://localhost:3004/data`;

// const useStyle = makeStyles({
//   button: {
//     margin: "10px 10px 0 0",
//     background: "white",
//   },

//   selected: {
//     display: "flex",
//     background: "#f0f3f5",
//   },
// });

const Wrapper = styled(Box)`
  width: 90%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 22% 63% 15%;
  grid-gap: 1.5rem;

  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  .popular-filter {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }

  .progress {
    width: 20%;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .progress > img {
    margin-bottom: 10px;
    width: 100px;
  }

  @media (max-width: 800px) {
    width: 95%;
    display: grid;
    grid-template-columns: 22% 70% 1%;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 90%;
    gap:10px;
    justify-content:center;
    align-items: center;
   
    .ads {
      display: none;
    }
    .list {
      width: 90%;
      margin: auto;
    }
  }
`;

export const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  console.log("hotels:", hotels[1]);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  //   const classes = useStyle();
  const [priceFilter, setPriceFilter] = useState("");
  const history = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    // const handleResize = () => {
    //   setW(window.innerWidth);
    // };
    // window.addEventListener("resize", handleResize);

    getData();
    console.log(hotels);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  const handleQueryChange = (val) => {
    setSearchQuery(val);
  };

  const handleChange = (event) => {
    const range = event.target.value.split(" ").map(Number);
    setPriceFilter(event.target.value);
    handlePriceFilter(range[0], range[1]);
  };

  const handlePriceFilter = (a, b) => {
    setloading(true);
    const newData = data.filter((item) => {
      return item.price >= a && item.price < b;
    });

    setHotels(newData);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const getData = () => {
    setloading(true);
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        setData(data);
        setHotels(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleStar = () => {};
  //   const handleStar = useCallback(
  //     (star) => {
  //       setloading(true);
  //       const newData = data.filter((item) => {
  //         return item.starRating >= star;
  //       });

  //       setHotels(newData);

  //       setTimeout(() => {
  //         setloading(false);
  //       }, 2000);
  //     },
  //     [data]
  //   );

  const handleOpenHotel = (id) => {
    history(`/hotels/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Wrapper>
        <div className="sorting">
          <SearchByProperty handleQueryChange={handleQueryChange} query={searchQuery} />

          {/* ---------------------------------------------------------------------------------------------------Star rating  */}
          <div className="filter-title">Star rating</div>
          <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Button
              onClick={() => {
                handleStar(1);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              1
            </Button>

            <Button
              onClick={() => {
                handleStar(2);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              2
            </Button>

            <Button
              onClick={() => {
                handleStar(3);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              3
            </Button>

            <Button
              onClick={() => {
                handleStar(4);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              4
            </Button>

            <Button
              onClick={() => {
                handleStar(5);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              5
            </Button>
          </Box>

          {/* ------------------------------------------------------------------------------------------------------- Your Budget rating  */}
          <div className="filter-title">Your Budget</div>
        </div>
        {/*------------------------------------------------------------------------------------------>>>>>> Hotel List  */}

        <div className="list">
          {loading ? (
            <div className="progress">
              {/* <img src={trvloLogo} alt="" /> */}
              Loading.......
              <CircularProgress />
            </div>
          ) : (
            hotels.slice(0, 4).map((item) => {
              return <Hotelcard handleOpenHotel={handleOpenHotel} key={item.hotelId} data={item} />;
            })
          )}
        </div>
        {w > 728 && (
          <div className="ads">
            <Ads></Ads>
            <Ads></Ads>
          </div>
        )}
      </Wrapper>
    </>
  );
};
