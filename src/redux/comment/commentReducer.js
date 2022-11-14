import axios from "axios";
import { FETCH_ONE_COMMENT_FAILURE, FETCH_ONE_COMMENT_REQUEST, FETCH_ONE_COMMENT_SUCCESS, NO_COMMENT_SELECTED } from "./commentType";

const initialState={
    comment:[],
    error:"",
    laoding:false,
    message:""
}
export const commentReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ONE_COMMENT_REQUEST:{
            return {...state,comment:[],error:"",laoding:true,message:""}
        };
        case FETCH_ONE_COMMENT_SUCCESS:{
            return {...state,comment:action.payload,error:"",laoding:false,message:""}
        };
        case FETCH_ONE_COMMENT_FAILURE:{
            return {...state,comment:[],error:action.payload,laoding:false,message:""}
        };
        case NO_COMMENT_SELECTED:{
            return {...state,comment:[],error:action.payload,laoding:false,message:"click on the comment"}
        }
            
        default:
            return state;
    }
    
}
export default commentReducer;