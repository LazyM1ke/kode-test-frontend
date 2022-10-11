import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import filterReducer from "./reducers/filterSlice";

const rootReducer = combineReducers({
    userReducer,
    filterReducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}