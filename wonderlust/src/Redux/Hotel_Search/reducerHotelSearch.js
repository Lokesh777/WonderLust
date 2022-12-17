import { FILTER_BY_PRICE_FAILURE, FILTER_BY_PRICE_REQ, FILTER_BY_PRICE_SUCCESS, GET_HOTELS_FAILURE, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS, GET_HOTEL_DETAILS_FAILURE, GET_HOTEL_DETAILS_REQUEST, GET_HOTEL_DETAILS_RESET, GET_HOTEL_DETAILS_SUCCESS } from "./typesHotelSearch";


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

export const getHotelDetailReducer = (state = { loading_Detail: true,hotelDetail: {} }, action) => {
  switch (action.type) {
    case GET_HOTEL_DETAILS_REQUEST: {
      return { loading_Detail: true };
    }
    case GET_HOTEL_DETAILS_SUCCESS: {
      return { loading_Detail: false, hotelDetail: action.payload };
    }

    case GET_HOTEL_DETAILS_FAILURE: {
      return { loading_Detail: false, error: action.payload };
    }
    case GET_HOTEL_DETAILS_RESET: {
      return { hotelDetail: {} };
    }

    default:
      return state;
  }
};




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