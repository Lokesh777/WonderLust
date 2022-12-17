import { legacy_createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// reducers
import { Admin_Booking_Reducer } from "./Admin_Bookings/Admin_Bookings_Reducer";
import { Admin_Flight_Reducer } from "./Admin_Flight/Admin_Flight_Reducer";
import { Admin_Trip_Reducer } from "./Admin_Trips/Admin_Trips_Reducer";
import { Admin_Hotel_Reducer } from "./Admin_Hotel/Admin_Hotel_Reducer";
import { getFilterByPrice, getHotelDetailReducer, getHotelReducer } from "./Hotel_Search/reducerHotelSearch";
import { authReducer } from "./Auth/AuthReducer";

const rootReducer = combineReducers({
  admin_booking: Admin_Booking_Reducer,
  // admin_flight: Admin_Flight_Reducer,
  admin_trip: Admin_Trip_Reducer,
  admin_hotel: Admin_Hotel_Reducer,
  hotel_search: getHotelReducer,
  hotel_filterByPrice: getFilterByPrice,
  hotel_details: getHotelDetailReducer,
  auth:authReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
