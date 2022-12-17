import axios from "axios";
import  { useEffect, useState } from "react";

const FetchDataAxios = (url) => {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(url);
      setHotelData(data);
    })();
  }, [url]);

  return { hotelData };
};

export default FetchDataAxios;
