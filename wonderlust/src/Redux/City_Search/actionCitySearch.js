import axios from "axios";
import { API_URL } from "../API/api";
import { GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS } from "./typesCitySearch";

const URL = API_URL;

export const getCityAction = (city) => async (dispatch) => {
  try {
    dispatch({ type: GET_CITY_REQUEST });

    let response = await axios.get(`${URL}/city?name=${city}`);

    dispatch({ type: GET_CITY_SUCCESS, payload: response.data });
    // console.log("City dataa:", response.data);
  } catch (error) {
    dispatch({ type: GET_CITY_FAILURE, payload: error.message });

    console.log("Error While calling Get-City API Action", error.message);
  }
};
