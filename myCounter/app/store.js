import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../screens/CartSlice";

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})

export default store