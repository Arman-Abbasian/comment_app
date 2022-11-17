import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAsyncComments=createAsyncThunk("comments/getAsyncComments", async (_,{rejectWithValue})=>{
  try {
    const response=await axios.get(`http://localhost:4000/comments`);
    return response.data;
  } catch (error) {
    return rejectWithValue([],error)
  }
});
export const addAsyncComment=createAsyncThunk("comments/addAsyncComment", async (payload,{rejectWithValue})=>{
  try {
    const response=await axios.post(`http://localhost:4000/comments`,payload);
    return response.data;
  } catch (error) {
    return rejectWithValue([],error)
  }
});
export const removeAsyncComment=createAsyncThunk("comments/removeAsyncComment", async (payload,{rejectWithValue})=>{
  try {
    await axios.delete(`http://localhost:4000/comments/${payload}`);
    return payload;
  } catch (error) {
    return rejectWithValue([],error)
  }
});


const initialState = {
  comments:[],
  error:null,
  loading:false
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  // reducers: {},
  
  extraReducers:{
  
    [getAsyncComments.fulfilled]: (state,action) => {
      return {comments:action.payload,loading:false,error:null}
    },
    [getAsyncComments.pending]: (state,action) => {
      return {comments:[],loading:true,error:null}
    },
    [getAsyncComments.rejected]: (state,action) => {
      return {comments:[],loading:false,error:action.payload}
    },

    [addAsyncComment.fulfilled]: (state,action) => {
      state.todos.push(action.payload)
    },

    [removeAsyncComment.fulfilled]: (state,action) => {
      const remainedTodos=state.todos.filter(item=>item.id !== action.payload);
      return {...state,todos:remainedTodos,loading:false,error:null}
      
    },
  }
})

export default commentsSlice.reducer