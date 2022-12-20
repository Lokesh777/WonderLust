import {
    Booking_Create_Error,
    Booking_Create_Loading,
    Booking_Create_Success,
    Booking_Get_Error,
    Booking_Get_Loading,
    Booking_Get_Success
} from './actionTypes';
import axios from 'axios';
import { API_URL } from '../API/api';
export const Get_Bookings = (token) => async(dispatch) => {
dispatch({type:Booking_Get_Loading});

console.log('get req')

try{
    let response =await axios.get(`${API_URL}/bookingHotel/user`,{headers:{token}});
    const {error, message} = response.data

    if(error){
        dispatch({type:Booking_Get_Error});
    }else{
        const data = response.data;
        dispatch({type:Booking_Get_Success, payload:data});
    }
    
}catch(err){
    dispatch({type:Booking_Get_Error});
}
}

export const Create_Booking = (data, token, onSuccess, onError) => async(dispatch) => {
dispatch({type:Booking_Create_Loading});
const {hotelId, totalPrice,roomsPrice, roomsData,servicesCharge, persons, tripId} = data



try{
    let response =await axios.post(`${API_URL}/bookingHotel`, {hotelId, totalPrice,roomsPrice, roomsData,servicesCharge, persons, tripId}, {headers:{token:token}});
    const {error, message} = response.data
    if(error){
        dispatch({type:Booking_Create_Error});
        onError(message)
    }else{
        dispatch({type:Booking_Create_Success, payload:{hotelId, totalPrice,roomsPrice, roomsData,servicesCharge, persons, tripId}});
        onSuccess()
    }

}catch(err){
    dispatch({type:Booking_Create_Error});
    onError(err.message);
}
}