import { FormControlLabel, FormControl, RadioGroup, Radio, styled } from "@mui/material";
import { useState } from "react";

const Wrapper = styled("div")`
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

const GuestRating = () => {
  const [guestRating, setGuestRating] = useState("");
  const handleChange = (event) => {
    setGuestRating(event.target.value);
  };
  return (
    <Wrapper>
      <div className="filter-title">Guest rating</div>
      <div className="guest-rating">
        <FormControl component="fieldset">
          <RadioGroup aria-label="guest-rating" name="guest-rating" value={guestRating} onChange={handleChange}>
            <FormControlLabel color="primary" value="any" control={<Radio color="secondary" />} label="Any" />
            <FormControlLabel value="Wonderful 4.5+" control={<Radio color="secondary" />} label="Wonderful 4.5+" />
            <FormControlLabel value="Very good 4+" control={<Radio color="secondary" />} label="Very good 4+" />
            <FormControlLabel value="Good 3.5+" control={<Radio color="secondary" />} label="Good 3.5+" />
          </RadioGroup>
        </FormControl>
      </div>
    </Wrapper>
  );
};

export default GuestRating;
