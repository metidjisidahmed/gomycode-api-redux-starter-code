import { combineReducers } from 'redux'


import jokesReducer from "./jokesReducer"
import gendersReducer from "./gendersReducer"

let reducers= combineReducers({

    jokes : jokesReducer,
    gender : gendersReducer,
    //...etc another reducers

});

export default reducers
