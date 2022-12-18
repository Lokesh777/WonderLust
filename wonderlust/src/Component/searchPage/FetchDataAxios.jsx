import axios from "axios";
import { useEffect, useState } from "react";

const FetchDataAxios = async (url) => {
  let { data } = await axios.get(url);
  console.log('data:', data)

  return data;
};

export default FetchDataAxios;
