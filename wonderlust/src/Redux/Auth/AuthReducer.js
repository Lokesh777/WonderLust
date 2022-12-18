
import { getLocalStorage, setLocalStorage } from '../localStorage'
import {
    auth_signIn_error,
    auth_signIn_loading,
    auth_signIn_success,
    auth_signOut,
    auth_signUp_error,
    auth_signUp_loading,
    auth_signUp_success

} from './actionTypes'

const iniToken = getLocalStorage('tokenWonderLust');
const iniType = getLocalStorage('roleWonderLust');

const initialData = {
    data:{
        isAuth:!!iniToken,
        token: iniToken,
        role: iniType,
    },
    signInloading:false,
    signUploading:false,
    signInerror:false,
    signUperror:false,
}
export const authReducer= (state=initialData, {type, payload}) => {
    switch(type){
        case auth_signIn_error:{
            return{
                ...state,
                signInerror:true,
                signInloading:false,
            }
        }
        case auth_signIn_loading:{
            return{
                ...state,
                signInerror:false,
                signInloading:true,
            }
        }
        case auth_signIn_success:{
            setLocalStorage('tokenWonderLust', payload.token)
            setLocalStorage('roleWonderLust', payload.role)
            return{
                ...state,
                data:{
                    isAuth:true,
                    token: payload.token,
                    role: payload.role
                },
                signInerror:false,
                signInloading:false,
            }
        }

        // SIGNUP
        case auth_signUp_error:{
            return{
                ...state,
                signUperror:true,
                signUploading:false,
            }
        }
        case auth_signUp_loading:{
            return{
                ...state,
                signUperror:false,
                signUploading:true,
            }
        }
        case auth_signUp_success:{
            return{
                ...state,
                signUperror:false,
                signUploading:false,
            }
        }
        
        case auth_signOut:{
            setLocalStorage('tokenWonderLust', null)
            setLocalStorage('roleWonderLust', null)
            return{
                ...state,
                data:{
                    isAuth:false,
                    token: null,
                    type: null
                },
                error:false,
                loading:false
            }
        }
        default:{
            return state;
        }
    }
}