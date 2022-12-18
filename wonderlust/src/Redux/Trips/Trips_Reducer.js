import {
    Trip_Create_Error,
    Trip_Create_Loading,
    Trip_Create_Success,
    Trip_Get_Error,
    Trip_Get_Loading,
    Trip_Get_Success
} from './actionTypes'
const iState={
    data:[],
    getLoading:false,
    getError:false,
    createLoading:false,
    createError:false,
}
export const  Trip_Reducer = (state=iState, {type, payload}) => {
    switch(type){

        // Create
        case Trip_Create_Error:{
            return ({
                ...state,
                createLoading:false,
                createError:true,
            })
        }
        case Trip_Create_Loading:{
            return ({
                ...state,
                createLoading:true,
                createError:false,
            })
        }
        case Trip_Create_Success:{
            return ({
                ...state,
                data:[...state.data, payload],
                createLoading:false,
                createError:false,
            })
        }

        // GEt
        case Trip_Get_Error:{
            return ({
                ...state,
                getLoading:false,
                getError:true,
            })
        }
        case Trip_Get_Loading:{
            return ({
                ...state,
                getLoading:true,
                getError:false,
            })
        }
        case Trip_Get_Success:{
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