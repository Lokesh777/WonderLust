import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import trvloLogo from "./gitWanderlust.gif";

import { Star } from "@mui/icons-material";
// import logo from "../../logo.svg";
import { FormControlLabel, styled, Radio, Button, FormControl, RadioGroup, CircularProgress, Box } from "@mui/material";
import { useCallback } from "react";

import { useNavigate } from "react-router";
import { SearchByProperty } from "./Filter/SearchByProperty";
import { Hotelcard } from "./Hotelcard";
import Ads from "./Filter/Ad";
import { PopularFilter } from "./Filter/PopularFilter";
import GuestRating from "./Filter/GuestRating";
import NoDataFound from "./Filter/NoDataFound";
import { PaymentType } from "./Filter/PaymentType";
import { PropertyType } from "./Filter/PropertyType";
import { FoodPlans } from "./Filter/FoodPlans";
import { PopularLocation } from "./Filter/PopularLocation";
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
    text-align: left;
  }

  .popular-filter {
    display: flex;
    flex-direction: column;
    color: #505c66;

    @media (max-width: 400px) {
      display: flex;
      flex-direction: row;
    }
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
    grid-template-columns: 95%;
    gird-template-row: auto;
    gap: 10px;
    justify-content: center;
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

const RadioGrp = styled(RadioGroup)`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
const BoxButton = styled(Box)`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

  const handlePriceFilter = useCallback(
    (a, b) => {
      setloading(true);
      if (a === 0 && b === 0) {
        setHotels(data);
      } else {
        const newData = data.filter((item) => {
          return item.price >= a && item.price < b;
        });
        setHotels(newData);
      }

      setTimeout(() => {
        setloading(false);
      }, 1400);
    },
    [data]
  );

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
  // const handleStar = () => {};
  const handleStar = useCallback(
    (star) => {
      console.log("star:", star);
      setloading(true);
      const newData = data.filter((item) => {
        return item.starRating >= star;
      });

      setHotels(newData);

      setTimeout(() => {
        setloading(false);
      }, 1600);
    },
    [data]
  );

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
          <BoxButton style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Button
              color="secondary"
              onClick={() => {
                handleStar(1);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              1
            </Button>

            <Button
              color="secondary"
              onClick={() => {
                handleStar(2);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              2
            </Button>

            <Button
              color="secondary"
              onClick={() => {
                handleStar(3);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              3
            </Button>

            <Button
              color="secondary"
              onClick={() => {
                handleStar(4);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              4
            </Button>

            <Button
              color="secondary"
              onClick={() => {
                handleStar(5);
              }}
              variant="contained"
              endIcon={<Star />}
            >
              5
            </Button>
          </BoxButton>

          {/* ------------------------------------------------------------------------------------------------------- Your Budget rating  */}
          <div className="filter-title">Your Budget</div>
          <div className="popular-filter">
            <FormControl component="fieldset">
              <RadioGrp aria-label="guest-rating" name="guest-rating" value={priceFilter} onChange={handleChange}>
                <FormControlLabel value="0 0" control={<Radio color="secondary" />} label="All" />
                <FormControlLabel value="0 75" control={<Radio color="secondary" />} label="Less than 75$" />
                <FormControlLabel value="75 125" control={<Radio color="secondary" />} label="75$ to 125$" labelPlacement="end" />
                <FormControlLabel value="125 200" control={<Radio color="secondary" />} label="125$ to 200$" labelPlacement="end" />
                <FormControlLabel value="200 300" control={<Radio color="secondary" />} label="200$ to 300$" labelPlacement="end" />
                <FormControlLabel value="300 1000" control={<Radio color="secondary" />} label="300$ and above" labelPlacement="end" />
              </RadioGrp>
            </FormControl>
          </div>
          <PopularFilter></PopularFilter>
          <GuestRating></GuestRating>
          <PaymentType></PaymentType>
          <PropertyType></PropertyType>
          <PopularLocation />
          <FoodPlans />
        
        </div>
        {/*------------------------------------------------------------------------------------------>>>>>> Hotel List  */}

        <div className="list">
          {loading ? (
            <div className="progress">
              <img src={trvloLogo} alt="" />
              Loading.......
              <CircularProgress color="secondary" />
            </div>
          ) : hotels.length > 0 ? (
            hotels.map((item) => {
              return <Hotelcard handleOpenHotel={handleOpenHotel} key={item.hotelId} data={item} />;
            })
          ) : (
           <NoDataFound  ></NoDataFound>

          )}
        </div>
        {w > 728 && (
          <div className="ads">
            <Ads></Ads>
            <Ads></Ads>
            <Ads></Ads>

          </div>
        )}
      </Wrapper>
    </>
  );
};
