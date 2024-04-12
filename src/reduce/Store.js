import { configureStore,combineReducers } from "@reduxjs/toolkit";
import appReducer from "./Reducer"

const RootReducer = combineReducers({
    app:appReducer
});
const store = configureStore({
    reducer: RootReducer
})

export default store;