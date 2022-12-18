import { AccountCircle } from "@mui/icons-material";
import { TextField, Divider, styled, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchName from "../SearchHotel/SearchName";
import { useEffect, useState } from "react";
import FetchDataAxios from "../../FetchDataAxios";
import axios from "axios";

// const useStyles = makeStyles({
//   input: {
//     background: "white",
//   },
// });

const Wrapper = styled(Box)`
  .search-title {
    width: "100%";
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #263159;

    display: flex;
    align-content: "start";
  }

  .divider {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 480px) {
    width: "80%";
    display: "flex";
    align-items: "center";
    justify-content: "center";

    margin: auto;
    .searchBar {
      justify-content: "center";
      margin: auto;
    }
    .iconSearch {
      display: none;
    }
  }
`;

export const SearchByProperty = ({ handleQueryChange, query, handleClicksSearch }) => {
  console.log("query:", query);
  //   const classes = useStyles();
  let c = [
    {
      _id: "639c639e938f5ea71d7ee53b",
      name: "agra",
      state: "uttar-pradesh",
      country: "India",
      places: [],
    },
    {
      _id: "639c639e938f5ea71d7ee52d",
      name: "ahmedabad",
      state: "gujarat",
      country: "India",
      places: [],
    },
  ];
  console.log("c:", c[0].name);
  const [cityState, setCityState] = useState([]);
  console.log("cityState:", cityState);

  const getData = async (query) => {
    await axios
      .get(`http://localhost:8080/city?name=${query}`)
      .then((res) => {
        const { data } = res;
        console.log("City:", data);
        setCityState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useState(() => {
    if (!query) {
      setCityState([]);
    }
  }, [query]);

  return (
    <Wrapper>
      <div className="search-title">Search by property name</div>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="searchBar">
        <TextField
          style={{ background: "white", marginRight: "5px" }}
          id="outlined-basic"
          label="Eg: Taj Hotel "
          variant="outlined"
          color="secondary"
          value={query}
          onChange={(e) => {
            handleQueryChange(e.target.value);
            getData(e.target.value);
          }}
        />
        <SearchIcon onClick={handleClicksSearch} className="iconSearch" fontSize="large" sx={{ color: "#7b1fa2", mr: 1 }} />
      </Box>
      <Box>
        {cityState.length > 0 &&
          cityState.length < 5 &&
          cityState.map((c, i) => {
            return (
              <Box key={i} sx={{ width: "70%", marginLeft: "18px" }}>
                <SearchName qurey={c.name}></SearchName>
              </Box>
            );
          })}
      </Box>
      <Divider className="divider" />
      <div className="search-title">Filter by</div>
    </Wrapper>
  );
};
