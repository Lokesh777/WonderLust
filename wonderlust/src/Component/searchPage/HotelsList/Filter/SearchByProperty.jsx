import { AccountCircle } from "@mui/icons-material";
import { TextField, Divider, styled, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// const useStyles = makeStyles({
//   input: {
//     background: "white",
//   },
// });

const Wrapper = styled(Box)`
  .search-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #263159;
    display:flex;
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

export const SearchByProperty = ({ handleQueryChange, query }) => {
  //   const classes = useStyles();
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
          }}
        />
        <SearchIcon className="iconSearch" fontSize="large" sx={{ color: "#7b1fa2", mr: 1 }} />
      </Box>
      <Divider className="divider" />
      <div className="search-title">Filter by</div>
    </Wrapper>
  );
};
