import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAsyncComment=createAsyncThunk("comment/getAsyncComment", async (payload,{rejectWithValue})=>{
  try {
    const response=await axios.get(`http://localhost:4000/comments/${payload}`);
    return response.data;
  } catch (error) {
    return rejectWithValue([],error)
  }
});

export const removeAsyncCommentId=createAsyncThunk("comment/removeAsyncCommentId", async (_,{rejectWithValue})=>{
  return 
});


const initialState = {
  comment:{},
  error:null,
  loading:false,
  message:'click on a comment'
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  // reducers: {},
  
  extraReducers:{
  
    [getAsyncComment.fulfilled]: (state,action) => {
      return {comment:action.payload,loading:false,error:null,message:''}
    },
    [getAsyncComment.pending]: (state,action) => {
      return {comment:{},loading:true,error:null,message:''}
    },
    [getAsyncComment.rejected]: (state,action) => {
      return {comment:{}, loading:false,error:action.payload,message:''}
    },

    [removeAsyncCommentId.fulfilled]: (state,action) => {
      return initialState;
      
    },
  }
})

export default commentSlice.reducer