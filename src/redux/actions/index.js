import * as ActionTypes from "./actionTypes"
import axios from "axios";


export const getJokesLoading=()=>{
    return{
        type: ActionTypes.GET_JOKES_LOADING
    }
}

export const getJokesError=(err)=>{
    return{
        type : ActionTypes.GET_JOKES_ERROR,
        payload: err
    }
}

export const getJokesSuccess=(content)=>{
    return{
        type: ActionTypes.GET_JOKES_SUCCESS,
        payload: content
    }
}



export const fetchGetJokes=(jokesNumber)=>(dispatch)=>{
    // STEP 1 : Trigger the Loading state
    dispatch(getJokesLoading());
    // axios.get("https://v2.jokeapi.dev/joke/Any?amount="+jokesNumber)
    axios.get(`https://v2.jokeapi.dev/joke/Any?amount=${jokesNumber}`)
        .then(response =>{
            // STEP 2.1 Once we get the jokes , we store them in the jokes reducer
            console.log("response =", response)
            dispatch(getJokesSuccess(response.data.jokes))
        })
        .catch(error =>{
            // STEP 2.2 If there is an error : we show an error compounent
            dispatch(getJokesError(error.message))
        });
}
