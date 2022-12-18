import {
        Trip_Create_Error,
        Trip_Create_Loading,
        Trip_Create_Success,
        Trip_Get_Error,
        Trip_Get_Loading,
        Trip_Get_Success
    } from './actionTypes';
import axios from 'axios';

export const Get_Trips = (token) => async(dispatch) => {
    dispatch({type:Trip_Get_Loading});
    
    try{
        let response =await axios.get('http://localhost:8080/trip',{headers:{token}});
        const {error, message} = response.data

        if(error){
            dispatch({type:Trip_Get_Error});
        }else{
            const data = response.data;
            dispatch({type:Trip_Get_Success, payload:data});
        }

    }catch(err){
        dispatch({type:Trip_Get_Error});
    }
}

export const Create_Trip = (data, token, onSuccess, onError) => async(dispatch) => {
    dispatch({type:Trip_Create_Loading});
    const {name, description} = data

    try{
        let response =await axios.post('http://localhost:8080/trip', {name, description}, {headers:{token:token}});
        console.log(response.data)
        const {error, message} = response.data
        if(error){
            dispatch({type:Trip_Create_Error});
            onError(message)
        }else{
            dispatch({type:Trip_Create_Success, payload:{name, description}});
            onSuccess()
        }

    }catch(err){
        dispatch({type:Trip_Create_Error});
        onError(err.message);
    }
}