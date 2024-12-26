import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./TodoSlice";
const Store=configureStore({
    reducer:{
        //your reducers
        myTodo:MyReducer

    }
})
export default Store;