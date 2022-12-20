import {
    auth_signIn_error,
    auth_signIn_loading,
    auth_signIn_success,
    auth_signOut,
    auth_signUp_error,
    auth_signUp_loading,
    auth_signUp_success

} from './actionTypes'
import axios from 'axios';
import { API_URL } from '../API/api';


export const SignInAction = (data, onSuccess, onError) =>async (dispatch) => {
    const {email, password} = data;
    dispatch({type:auth_signIn_loading});
    try{
        let res=await axios.post(`${API_URL}/login/login`, {email, password});
        console.log(res.data);
        let {token, role, error, message, fname} = res.data;

        

        console.log(fname, 'dfsdfsdfgfgdfg')
        if(error){
            dispatch({type:auth_signIn_error, payload:message});
            onError(message)
        }else{
            dispatch({type:auth_signIn_success, payload:{token, role, fname}});
            onSuccess();
        }

    }catch(err){
        dispatch({type:auth_signIn_error, payload:err});
        onError(err.message)
    }
}

export const SignUpAction = (data, onSuccess, onError) =>async (dispatch) => {
    const {email, password, fname, lname} = data;
    dispatch({type:auth_signUp_loading});
    try{
        let res=await axios.post(`${API_URL}/user/register`, {email, password, fname, lname});
        let {error, message} = res.data;

        if(error){
            dispatch({type:auth_signUp_error});
            onError(message)
        }else{
            dispatch({type:auth_signUp_success})
            onSuccess();
        }

    }catch(err){
        dispatch({type:auth_signUp_error, payload:err});
        onError(err.message)
    }
}

export const SignOut = () => {
    return ({type:auth_signOut})
}