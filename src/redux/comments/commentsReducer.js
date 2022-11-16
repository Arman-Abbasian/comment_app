import axios from "axios";
import { ADD_ONE_COMMENT, DELETE_ONE_COMMENT, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_TODOS_FAILURE } from "./commentsType";
import { fetchComments } from "./commentsActions";

const initialState={
    comments:null,
    error:"",
    laoding:false
}
export const commentsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:{
            return {comments:null,error:"",laoding:true}
        };
        case FETCH_COMMENTS_SUCCESS:{
            console.log(action.payload)
            return {comments:action.payload,error:"",laoding:false}
        };
        case FETCH_COMMENTS_FAILURE:{
            return {comments:null,error:action.payload,laoding:false}
        }

        case ADD_ONE_COMMENT:{
            axios.post(`http://localhost:4000/comments`,action.payload)
            .then(res=>{
                state.comments.push(res.data);
                console.log(state)
                return state;
            })
            .catch(err=>console.log(err.message))
           return state;
        };

        case DELETE_ONE_COMMENT:{
            axios.delete(`http://localhost:4000/comments/${action.payload}`)
            .then(res=>{
                return state;
            })
            .catch(err=>console.log(err));
            return state;
            
        }
            
        default:
            return state;
    }
    
}
export default commentsReducer;
