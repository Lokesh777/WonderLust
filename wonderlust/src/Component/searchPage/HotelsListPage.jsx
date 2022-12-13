import React, { useEffect, useState } from 'react'
import { styled ,CircularProgress} from "@mui/material";
import { HotelList } from './HotelsList/HotelList';
import trvloLogo from './HotelsList/gitWanderlust.gif'


const Wrapper = styled("div")`
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
`;

export const HotelsListPage = () => {
    const [loading, setloading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setloading(false);
      }, 2000);
    });
    return (
      <>
        {loading ? (
          <Wrapper>
            <div className="progress">
            <img src={trvloLogo} alt="" />

              <CircularProgress color="secondary"/>
            </div>
          </Wrapper>
        ) : (
          <HotelList />
        )}
      </>
    );
  };
  

export default HotelsListPage