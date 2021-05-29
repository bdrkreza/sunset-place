import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import roomReducer from "../Reducers/Reducers";


const combinedReducer = combineReducers({
    rooms: roomReducer,

})

export const store = createStore(combinedReducer, composeWithDevTools())