import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import inputRe from "./slice/InputSlice";

export default configureStore({
    reducer : {
        counter : counterReducer,
        input : inputRe
    }
})