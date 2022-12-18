import {
    Booking_Create_Error,
    Booking_Create_Loading,
    Booking_Create_Success,
    Booking_Get_Error,
    Booking_Get_Loading,
    Booking_Get_Success
} from './actionTypes'
const iState={
    data:[],
    getLoading:false,
    getError:false,
    createLoading:false,
    createError:false,
}
export const  BookingsReducer = (state=iState, {type, payload}) => {
    switch(type){

        // Create
        case Booking_Create_Error:{
            return ({
                ...state,
                createLoading:false,
                createError:true,
            })
        }
        case Booking_Create_Loading:{
            return ({
                ...state,
                createLoading:true,
                createError:false,
            })
        }
        case Booking_Create_Success:{
            return ({
                ...state,
                data:[...state.data, payload],
                createLoading:false,
                createError:false,
            })
        }

        // GEt
        case Booking_Get_Error:{
            return ({
                ...state,
                getLoading:false,
                getError:true,
            })
        }
        case Booking_Get_Loading:{
            return ({
                ...state,
                getLoading:true,
                getError:false,
            })
        }
        case Booking_Get_Success:{
            return ({
                ...state,
                data:[...payload],
                getLoading:false,
                getError:false,
            })
        }
        default:{
            return state
        }
    }
}