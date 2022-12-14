import {
    FormControlLabel,
    FormControl,
    RadioGroup,
    Radio,
    styled } from "@mui/material";
  import { useState } from "react";
  
  const Wrapper = styled('div')`
    .filter-title {
      font-size: 1rem;
      font-weight: 700;
      margin: 1.5rem 0;
    }
  
    .guest-rating {
      display: flex;
      flex-direction: column;
      color: #505c66;
    }
  `;
  
  export const PopularLocation = () => {
    const [popularRating, setPopularRating] = useState("");
    const handleChange = (event) => {
      setPopularRating(event.target.value);
    };
  
    return (
      <Wrapper>
        <div className="filter-title">Popular Locations</div>
        <div className="popular-filter">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="location"
              name="location"
              value={popularRating}
              onChange={handleChange}
            >
              <FormControlLabel
                color="secondary"
                value="Calangute Beach"
                control={<Radio color="secondary" />}
                label="Calangute Beach"
              />
              <FormControlLabel
                value="Colva Beach"
                control={<Radio color="secondary" />}
                label="Colva Beach"
              />
              <FormControlLabel
                value="Varca Beach"
                control={<Radio color="secondary" />}
                label="Varca Beach"
              />
              <FormControlLabel
                value="Majorda Beach"
                control={<Radio color="secondary" />}
                label="Majorda Beach"
              />
              <FormControlLabel
                value="Benaulim Beach"
                control={<Radio color="secondary" />}
                label="Benaulim Beach"
              />
              <FormControlLabel
                value="Dudhsagar Waterfalls"
                control={<Radio color="secondary" />}
                label="Dudhsagar Waterfalls"
              />
              <FormControlLabel
                value="Miramar Beach"
                control={<Radio color="secondary" />}
                label="Miramar Beach"
              />
              <FormControlLabel
                value="Fort Aguada"
                control={<Radio color="secondary" />}
                label="Fort Aguada"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Wrapper>
    );
  };
  