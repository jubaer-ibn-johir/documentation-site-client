import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions=createAsyncThunk('questions/fetchQuestions',async()=>{
    const res = await axios.get("https://polar-shore-69456.herokuapp.com/question")
    return res.data
})
const questionSlice = createSlice({
    name:"questions",
    initialState:{
        isLoading:false,
        questions:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQuestions.pending,(state)=>{
            state.isLoading=true
        });
        builder.addCase(fetchQuestions.fulfilled,(state,action)=>{
            state.isLoading = false
            state.questions = action.payload
            state.error = null
        });
        builder.addCase(fetchQuestions.rejected,(state,action)=>{
            state.isLoading = false
            state.questions = []
            state.error = action.error.message
        });
    }
})

export default questionSlice.reducer;