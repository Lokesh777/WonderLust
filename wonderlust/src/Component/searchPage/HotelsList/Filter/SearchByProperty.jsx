import { TextField, Divider, styled, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchName from "../SearchHotel/SearchName";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../Redux/API/api";

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
  //   const classes = useStyles();

  const [cityState, setCityState] = useState([]);
let url = API_URL
  const getData = async (query) => {
    await axios
      .get(`${url}/city?name=${query}`)
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
      {/* <div className="search-title">Search by property name</div> */}
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
