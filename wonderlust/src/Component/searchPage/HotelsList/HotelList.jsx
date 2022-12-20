import { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import { filterByPriceAction, getHotelAction } from "../../../Redux/Hotel_Search/actionsHotelSearch";
import PaginationComp from "./Pagination/PaginationComp";
import axios from "axios";
import { API_URL } from "../../../Redux/API/api";
// import { getCityAction } from "../../../Redux/City_Search/actionCitySearch";
// import { makeStyles } from '@material-ui/core/styles'
// const url = `http://localhost:3004/hotel`;
// const url = `http://localhost:8080/hotel?limit=12`;

const Wrapper = styled(Box)`
  width: 100%;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 22% 63% 12%;
  grid-gap: 1.5rem;
  background-color: #d1c2d9;
  padding: 2rem 1rem;

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
    grid-template-columns: 22% 70%;
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
  // const [hotels, setHotels] = useState([]);
  // const [data, setData] = useState([]);
  // const [loading, setloading] = useState(false);
  // const [priceFilter, setPriceFilter] = useState("");
  // const navigate = useNavigate();
  // const [searchHotel, setsearchHotel] = useState("");

  // const dispatch = useDispatch();
  // const { hotelsState, loading: load } = useSelector((state) => state.hotel_search);

  // const { hotelsFilterPrice, loading: filterLoading } = useSelector((state) => state.hotel_filterByPrice);

  // const [w, setW] = useState(window.innerWidth);

  // let city = localStorage.getItem("searchQuery");
  // // console.log("city:", city);

  // useEffect(() => {
  //   setloading(true);

  //   if (load) {
  //     dispatch(getHotelAction(city));
  //   }

  //   if (hotelsState) {
  //     // console.log("hotelsState:", hotelsState);
  //     setHotels(hotelsState);
  //     setData(hotelsState);
  //   }
  //   if (!filterLoading) {
  //     // console.log("filterLoading:", filterLoading);
  //     setHotels(hotelsFilterPrice);
  //     setData(hotelsFilterPrice);
  //   }
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 1000);
  // }, [dispatch, load, hotelsState, priceFilter, filterLoading, hotelsFilterPrice, city]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setW(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const handleQueryChange = (val) => {
  //   setsearchHotel(val);
  // };
  // const handleClicksSearch = () => {
  //   // console.log('handleClicksSearch:', searchHotel)
  // };
  // const handleChange = (event) => {
  //   const range = event.target.value.split(" ").map(Number);
  //   setPriceFilter(event.target.value);
  //   // handlePriceFilter(range[0], range[1]);
  //   setloading(true);
  //   dispatch(filterByPriceAction(range[0], range[1]));
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 1400);
  //   // setHotels(hotelsFilterPrice);
  //   // console.log("hotels:", hotels);
  // };

  // // const handlePriceFilter = useCallback(
  // //   (a, b) => {
  // //     console.log("a, b:", a, b);
  // //     setloading(true);
  // //     if (a === 0 && b === 0) {
  // //       setHotels(data);
  // //     } else {
  // //       const newData = data.filter((item) => {
  // //         console.log("item:", item.rooms[0].price);

  // //         return item.rooms[0].price >= a && item.rooms[0].price <= b;
  // //       });
  // //       console.log("newData:", newData);
  // //       setHotels(newData);
  // //     }

  // //     setTimeout(() => {
  // //       setloading(false);
  // //     }, 1400);
  // //   },
  // //   [data]
  // // );

  // // const getData = () => {
  // //   setloading(true);
  // //   axios
  // //     .get(url)
  // //     .then((res) => {
  // //       const { data } = res;
  // //       setData(data);
  // //       setHotels(data);
  // //       // console.log('data:', data)
  // //       setloading(false);
  // //     })
  // //     .catch((err) => {
  // //       console.log(err);
  // //     });
  // // };
  // // const handleStar = () => {};
  // const handleStar = useCallback(
  //   (star) => {
  //     setloading(true);
  //     const newData = data.filter((item) => {
  //       return item.starRating >= star;
  //     });

  //     setHotels(newData);

  //     setTimeout(() => {
  //       setloading(false);
  //     }, 1600);
  //   },
  //   [data]
  // );
  // // console.log("data:", data);
  // const handleOpenHotel = (id) => {
  //   navigate(`/hotel/${id}`);
  // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [priceFilter]);

  // --------//
  const [hotels, setHotels] = useState([]);
  // console.log("hotels:", hotels[1]);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHotel, setsearchHotel] = useState("");

  const [w, setW] = useState(window.innerWidth);
  let city = localStorage.getItem("searchQuery");

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    getData();
    console.log(hotels);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleQueryChange = (val) => {
    setsearchHotel(val);
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
    let url = `${API_URL}/hotel`;
    if (city) {
      console.log("citybrfoe:", city);
      city = city.replace(/^"|"$/g, "");

      console.log("city:", city);
      url = `${API_URL}/hotel?city=${city}`;
    }

    setloading(true);
    axios
      .get(url)
      .then((res) => {
        const { data } = res;
        console.log("data:", data);
        setData(data);
        setHotels(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClicksSearch = () => {
    // console.log('handleClicksSearch:', searchHotel)
  };
  const handleStar = useCallback(
    (star) => {
      setloading(true);
      const newData = data.filter((item) => {
        return item.starRating >= star;
      });

      setHotels(newData);

      setTimeout(() => {
        setloading(false);
      }, 2000);
    },
    [data]
  );

  const handleOpenHotel = (id) => {
    // history.push(`/hotels/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper>
        <div className="sorting">
          {
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "20px" }}>
              <Button
                style={{ width: "70%" }}
                color="secondary"
                onClick={() => {
                  window.location.reload();
                }}
                variant="contained"
                startIcon={<LocationOnIcon />}
              >
                {`Hotels  ${city !== null ? city : " "}`}
              </Button>
              <SearchByProperty handleQueryChange={handleQueryChange} query={searchHotel} handleClicksSearch={handleClicksSearch} />
            </Box>
          }
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
                <FormControlLabel value="300 400" control={<Radio color="secondary" />} label="Less than 350$" />
                <FormControlLabel value="400 600" control={<Radio color="secondary" />} label="400$ to 600$" labelPlacement="end" />
                <FormControlLabel value="600 800" control={<Radio color="secondary" />} label="600$ to 800$" labelPlacement="end" />
                <FormControlLabel value="800 1000" control={<Radio color="secondary" />} label="800$ to 100$" labelPlacement="end" />
                <FormControlLabel value="1000 1500" control={<Radio color="secondary" />} label="1000$ and above" labelPlacement="end" />
              </RadioGrp>
            </FormControl>
          </div>
          {w > 500 && <PopularFilter></PopularFilter>}
          {w > 500 && <GuestRating></GuestRating>}
          {w > 500 && <PaymentType></PaymentType>}
          {w > 500 && <PropertyType></PropertyType>}
          {w > 500 && <PopularLocation />} {w > 500 && <FoodPlans />}
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
              return <Hotelcard handleOpenHotel={handleOpenHotel} key={item._id} data={item} />;
            })
          ) : (
            <NoDataFound></NoDataFound>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>{hotels.length > 10 && <PaginationComp></PaginationComp>}</div>
        </div>
        {/* {hotelsFilterPrice && !filterLoading ? (
         
            <div className="list">
              {loading || filterLoading ? (
                <div className="progress">
                  <img src={trvloLogo} alt="" />
                  Loading.......
                  <CircularProgress color="secondary" />
                </div>
              ) : hotelsFilterPrice.length > 0 ? (
                hotelsFilterPrice.map((item) => {
                  return <Hotelcard handleOpenHotel={handleOpenHotel} key={item._id} data={item} />;
                })
              ) : (
                <NoDataFound></NoDataFound>
              )}
            </div>
          ) : (
            <div className="list">
              {loading ? (
                <div className="progress">
                  <img src={trvloLogo} alt="" />
                  Loading.......
                  <CircularProgress color="secondary" />
                </div>
              ) : hotels.length > 0 ? (
                hotels.map((item) => {
                  return <Hotelcard handleOpenHotel={handleOpenHotel} key={item._id} data={item} />;
                })
              ) : (
                <NoDataFound></NoDataFound>
              )}
            </div>
          )} */}
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
