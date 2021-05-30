import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import { roomReducer, testimonialData } from "../Reducers/Reducers";



const combinedReducer = combineReducers({
    rooms: roomReducer,
    status: testimonialData

})

export const store = createStore(combinedReducer, composeWithDevTools())