import { GET_CITY_FAILURE, GET_CITY_REQUEST, GET_CITY_SUCCESS } from "./typesCitySearch";

export const getCityReducer = (state={loadingCity: true ,cityState:[]},action)=>{

    switch (action.type) {
        case GET_CITY_REQUEST: {
            return {  loadingCity: true };
        }
        case GET_CITY_SUCCESS: {
          return {  loadingCity: false,cityState: action.payload };
        }
    
        case GET_CITY_FAILURE: {
          return {loadingCity: false, cityState: action.payload };
        }
    
        default:
          return state;
      }
    
}