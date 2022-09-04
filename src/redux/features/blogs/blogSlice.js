import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs",async(searchKey)=>{
    const res = await axios.get("https://polar-shore-69456.herokuapp.com/blog")
    if(searchKey){
        const filterData= res.data.filter(blog =>blog.blogTitle.toLowerCase().includes(searchKey.toLowerCase()))
        return filterData
    }
    else{
        return res.data
    }
})
const blogSlice = createSlice({
    name:"blogs",
    initialState:{
        isLoading:false,
        blogs:[],
        error:null
    },
    extraReducers:(builder)=>{
    builder.addCase(fetchBlogs.pending,(state)=>{
        state.isLoading=true
    });
    builder.addCase(fetchBlogs.fulfilled,(state,action)=>{
        state.isLoading=false
        state.blogs=action.payload
        state.error= null
    });
    builder.addCase(fetchBlogs.rejected,(state,action)=>{
        state.isLoading=false
        state.blogs=[]
        state.error=action.error.message
    });
    }
})

export default blogSlice.reducer;