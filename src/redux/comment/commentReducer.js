import axios from "axios";
import { DELETE_COMMENT_SELECTED, FETCH_ONE_COMMENT_FAILURE, FETCH_ONE_COMMENT_REQUEST, FETCH_ONE_COMMENT_SUCCESS, NO_COMMENT_SELECTED, N_COMMENT_SELECTED } from "./commentType";

const initialState={
    comment:{},
    error:"",
    laoding:false,
    message:"click on one comment"
}
export const commentReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ONE_COMMENT_REQUEST:{
            return {comment:{},error:"",laoding:true,message:""}
        };
        case FETCH_ONE_COMMENT_SUCCESS:{
            return {comment:action.payload,error:"",laoding:false,message:""}
        };
        case FETCH_ONE_COMMENT_FAILURE:{
            return {comment:{},error:action.payload,laoding:false,message:""}
        }; 
        case NO_COMMENT_SELECTED:{
            return {comment:{},error:"",laoding:false,message:"click on one comment"}
        } ;
        case DELETE_COMMENT_SELECTED:{
            return {comment:{},error:"",laoding:false,message:"click on one comment"}
        } ;
        
        default:
            return state;
    }
    
}
export default commentReducer;
