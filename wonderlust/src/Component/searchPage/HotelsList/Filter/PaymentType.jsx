import { FormControlLabel, Checkbox ,styled} from "@mui/material";

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

export const PaymentType = () => {
  return (
    <Wrapper>
      <div className="filter-title">Payment type</div>
      <div className="popular-filter">
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="Fully refundable"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="Reserve now, pay later"
          labelPlacement="end"
        />
      </div>
    </Wrapper>
  );
};
