import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { DELETE_COMMENT_ID, FETCH_ONE_COMMENT_FAILURE, FETCH_ONE_COMMENT_REQUEST, FETCH_ONE_COMMENT_SUCCESS, NO_COMMENT_SELECTED } from "./commentType";


const fetchCommentRequest=()=>{
    return{
        type:FETCH_ONE_COMMENT_REQUEST
    }
};
const fetchCommentFailure=(payload)=>{
    return{
        type:FETCH_ONE_COMMENT_FAILURE,
        payload
    }
};
const fetchCommentSuccess=(payload)=>{
    return{
        type:FETCH_ONE_COMMENT_SUCCESS,
        payload
    }
};

export const fetchComment=(payload)=>{
    return function(dispatch){
        dispatch(fetchCommentRequest());
        axios.get(`http://localhost:4000/comments/${payload}`)
        .then(res=>{
            dispatch(fetchCommentSuccess(res.data));
        })
        .catch(err=>{
            dispatch(fetchCommentFailure(err.message))
        })
    }
};
export const noCommentSelected=()=>{
    return{
        type:NO_COMMENT_SELECTED
    }
};
export const deleteCommentId=()=>{
    return {
        return :DELETE_COMMENT_ID
    }
}



