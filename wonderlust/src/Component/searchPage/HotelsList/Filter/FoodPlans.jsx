import {
    FormGroup,
    FormControl,
    FormControlLabel,
    Checkbox,
    styled } from "@mui/material";
  
  const Wrapper = styled("div")`
    .filter-title {
      font-size: 1rem;
      font-weight: 700;
      margin: 1.5rem 0;
    }
  
    .meals-plan {
      display: flex;
      flex-direction: column;
      color: #505c66;
    }
  `;
  
  export const FoodPlans = () => {
    return (
      <Wrapper>
        <div className="filter-title">Meal Plans available</div>
        <div className="meals-plan">
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Breakfast included"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Lunch included"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Dinner included"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="All included"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Wrapper>
    );
  };
  