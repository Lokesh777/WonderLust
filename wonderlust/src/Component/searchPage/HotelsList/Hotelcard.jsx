import { styled } from "@mui/material";

const Wrapper = styled("div")`
  width: 95%;
  height: 170px;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 0.5rem;
  display: flex;
  background: white;
  padding-right: 0.5rem;
  ${"" /* border:1px solid red; */}

  &:hover {
    cursor: pointer;
  }

  .card-image {
    height: 100%;
    width: 30%;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .hotel-detail {
    width: 50%;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }

  .hotel-name,
  .hotel-city {
    margin: 0.1rem 0;
  }

  .hotel-name-add {
    margin-top: 5px;
  }

  .hotel-city {
    color: #505c66;
    padding-bottom: 0.5rem;
  }

  .description {
    ${"" /* color: #209c6b; */}
    color:blue;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .desc-rating {
    margin-bottom: 0.5rem;
  }

  .rating {
    font-size: 0.875rem;
    color: #505c66;

    color: #8f8f8f;
  }

  .star {
    color: #1d1c1c;
    font-weight: 700;
  }

  .price-detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    text-align: right;
  }

  .off {
    border-radius: 0.4rem;
    padding: 0.6rem;
    background: #1f7d57;
    color: white;
    text-align: center;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .total-price {
    font-weight: 700;
  }
  @media (max-width: 600px) {
    width: 100%;
    .hotel-detail {
      width: 60%;
    }
    .hotel-name {
      font-size: 0.9rem;
      color: red;
    }
  }
  @media (max-width: 500px) {
    width: 80%;
    height: 150px;

    .card-image {
      height: 60%;
      width: 30%;
      border-radius: 0.5rem 0 0 0.5rem;
    }
    .desc-rating {
      display: none;
    }
    .price-detail {
      display: flex;
      flex-direction: column;
      justify-content: start;
      ${"" /* align-items:center; */}
      font-size: 0.6rem;
      margin-bottom: 0.2rem;
      text-align: right;
    }
    .price {
      font-size: 1rem;
      font-weight: 700;
    }
  }
  @media (max-width: 400px) {
    
  }
`;

// hotelId
// images[1].url
// name
// address.city
// starRating
// price
export const Hotelcard = ({ data, handleOpenHotel }) => {
  // let hotelData ={
  //   hotelId:data.hotelId,
  //   name:data.name,
  //   address:data.address,
  //     starRating:data.starRating,
  //     price:data.price
  // }
  // console.log('hotelData:', hotelData)

  return (
    <Wrapper
      onClick={() => {
        // handleOpenHotel(data.hotelId);
      }}
    >
      <img className="card-image" src={data.images[1].url} alt="" />

      <div className="hotel-detail">
        <div className="hotel-name-add">
          <h3 className="hotel-name">{data.name}</h3>
          <div className="hotel-city">{data.address.city}</div>
        </div>
        <div className="desc-rating">
          <div className="description">Fully refundable</div>
          <div className="description">Reserve Now Pay Later</div>
          <div className="rating">
            <span className="star">{data.starRating}/5.0</span> Excellent (356 reviews)
          </div>
        </div>
      </div>
      <div className="price-detail">
        <div className="off">We have 5 left</div>
        <div className="price">${data.price}</div>
        <div>Per night</div>
        <div className="total-price">${data.price + 20} Total</div>
        <div>Includes taxes and fees</div>
      </div>
    </Wrapper>
  );
};
