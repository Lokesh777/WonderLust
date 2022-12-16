import { FILTER_BY_PRICE_FAILURE, FILTER_BY_PRICE_REQ, FILTER_BY_PRICE_SUCCESS, GET_HOTELS_FAILURE, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS } from "./typesHotelSearch";


export const getHotelReducer = (state={loading: true ,hotelsState:[]},action)=>{

    switch (action.type) {
        case GET_HOTELS_REQUEST: {
            return {  loading: true };
        }
        case GET_HOTELS_SUCCESS: {
          return {  loading: false,hotelsState: action.payload };
        }
    
        case GET_HOTELS_FAILURE: {
          return {loading: false, error: action.payload };
        }
    
        default:
          return state;
      }
    
}

export const getFilterByPrice= (state={loading: true ,hotelsFilterPrice:[]},action)=>{

    switch (action.type) {
        case FILTER_BY_PRICE_REQ: {
            return {  loading: true };
        }
        case FILTER_BY_PRICE_SUCCESS: {
          return {  loading: false,hotelsFilterPrice: action.payload };
        }
    
        case FILTER_BY_PRICE_FAILURE: {
          return {loading: false, error: action.payload };
        }
    
        default:
          return state;
      }
    
}