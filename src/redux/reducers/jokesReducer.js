import {GET_JOKES_ERROR, GET_JOKES_LOADING, GET_JOKES_SUCCESS} from "../actions/actionTypes";


const initialState = {
    data : [],
    loading : false,
    error : null
}

export default function jokesReducer (state = initialState, action) {
    switch(action.type){
        case GET_JOKES_LOADING:
            return {
                ...state,
                data : [],
                error: null,
                loading: true
            }
        case GET_JOKES_SUCCESS:
            return {
                ...state,
                data : action.payload,
                loading: false,
                error : null
            }
        case GET_JOKES_ERROR:
            return {
                ...state,
                data : [],
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
