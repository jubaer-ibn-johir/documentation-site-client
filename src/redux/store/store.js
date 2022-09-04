import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blogs/blogSlice";
import questionReducer from "../features/questions/questionSlice";

const store = configureStore({
    reducer:{
        questions:questionReducer,
        blogs:blogReducer,    
    }
})

export default store;