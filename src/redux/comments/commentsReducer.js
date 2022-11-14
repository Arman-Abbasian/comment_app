import axios from "axios";
import { ADD_ONE_COMMENT, DELETE_ONE_COMMENT, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_TODOS_FAILURE } from "./commentsType";

const initialState={
    comments:[],
    error:"",
    laoding:false
}
export const commentsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:{
            return {...state,comments:[],error:"",laoding:true}
        };
        case FETCH_COMMENTS_SUCCESS:{
            return {...state,comments:action.payload,error:"",laoding:false}
        };
        case FETCH_COMMENTS_FAILURE:{
            return {...state,comments:[],error:action.payload,laoding:false}
        }

        case ADD_ONE_COMMENT:{
            axios.post(`http://localhost:4000/comments`,action.payload)
            .then(res=>{
                console.log(state)
                return state;
            })
            .catch(err=>console.log(err.message))
           return state
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
