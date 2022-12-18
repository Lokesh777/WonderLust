import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageSlide from "./Filter/ImageSlide";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Wrapper = styled("div")`
  width: 95%;
  height: 170px;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 0.5rem;
  display: flex;
  background: white;
  padding-right: 0.5rem;
  paddind: 40px;
  ${"" /* z-index:0; */}

  ${"" /* border:1px solid red; */}

  ${'' /* &:hover {
    cursor: pointer;
  } */}

  .card-image {
    height: 100%;
    width: 30%;
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
    text-transform: uppercase;
    font-weight: 600;
  }

  .hotel-name-add {
    margin-top: 5px;
  }

  .hotel-city-name {
    padding-bottom: 0.2rem;
    display: "flex";
    justify-content: "center";
  }
  .hotel-city {
    color: #505c66;
    padding-bottom: 0.2rem;
    display: "flex";
    justify-content: "center";
    text-transform: capitalize;
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
    ${"" /* background: #1f7d57; */}
    cursor:pointer;
    background: #7b1fa2;
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
      font-size: 0.8rem;
    }
  }
  @media (min-width: 600px) {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
  @media (max-width: 700px) {
    .description {
      display: none;
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
    .desc-rating {
      display: none;
    }
  }
`;
// starRating
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
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log('Number(data.starRating):', typeof(data.starRating))

  return (
    <Wrapper>
      {w > 820 ? (
        <div className="card-image">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-100-px"
            containerClass="carousel-container"
            keyBoardControl={true}
          >
            {/* <img key={i} style={{ height: "170px", width: "500px",borderRadius:"10px" }} src={ele.url} alt="nm" /> */}
            {data.images.map((ele, i) => (
              <img key={i} style={{ height: "170px", width: "500px", borderRadius: "10px" }} src={ele} alt="nm" />
            ))}
          </Carousel>
        </div>
      ) : (
        <img className="card-image" src={data.images[1]} alt="" />
      )}

      {/* <img className="card-image" src={data.images[1].url} alt="" /> */}
      {/* {data.images.map((ele, i) => (
          <img textAlign={"center"} style={{ height: "170px", width: "500px",padding:'10px' }}  src={ele.url} alt="nm" />
        ))} */}

      <div className="hotel-detail">
        <div className="hotel-name-add">
          <div className="hotel-city-name">
            <h3 className="hotel-name">
              <ApartmentIcon fontSize="16px" color="secondary"></ApartmentIcon>
              {data.name}
            </h3>
          </div>
          {/* note */}
          {/* <div className="hotel-city">{data.address.city}</div>  */}
          <div className="hotel-city">
            {<LocationOnIcon fontSize="16px" color="secondary"></LocationOnIcon>}
            {data.contactInfo.city}
            {/* {data.contactInfo.address} */}
          </div>
        </div>
        <div className="desc-rating">
          <div className="description">Fully refundable</div>
          <div className="description">Reserve Now Pay Later</div>

          <div className="rating">
            {new Array(Number(data.starRating)).fill(0).map((i) => (
              <StarIcon color="secondary" fontSize="small"></StarIcon>
            ))}

            {/* <span className="star">
              {data.starRating}
              
              /5.0
            </span>{" "}
            Excellent (356 reviews) */}
          </div>
        </div>
      </div>
      <div className="price-detail">
        <div
          className="off"
          onClick={() => {
            handleOpenHotel(data._id);
          }}
        >
          View More{" "}
        </div>
        {/* note */}
        {/* <div className="price">${data.price}</div> */}
        <div className="price">${data.rooms[0].price}</div>
        <div>Per night</div>
        <div className="total-price">${data.rooms[0].price + 20} Total</div>
        <div>Includes taxes and fees</div>
      </div>
    </Wrapper>
  );
};
