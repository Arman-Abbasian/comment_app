import axios from "axios";
import { ADD_ONE_COMMENT, DELETE_ONE_COMMENT,FETCH_COMMENTS_FAILURE,FETCH_COMMENTS_REQUEST,FETCH_COMMENTS_SUCCESS} from "./commentsType";


export const fetchCommentsRequest=()=>{
    return{
        type:FETCH_COMMENTS_REQUEST
    }
};
export const fetchCommentsFailure=(payload)=>{
    return{
        type:FETCH_COMMENTS_FAILURE,
        payload
    }
};
const fetchCommentsSuccess=(payload)=>{
    return{
        type:FETCH_COMMENTS_SUCCESS,
        payload
    }
};

export const fetchComments=()=>{
    return function(dispatch){
        dispatch(fetchCommentsRequest());
        axios.get(`http://localhost:4000/comments`)
        .then(res=>{
            console.log(res.data)
            dispatch(fetchCommentsSuccess(res.data));
        })
        .catch(err=>{
            dispatch(fetchCommentsFailure(err.message))
        })
    }
};

export const addOneComment=(payload)=>{
    return{
        type:ADD_ONE_COMMENT,
        payload
    }
};


export const deleteOneComment=(payload)=>{
    return{
        type:DELETE_ONE_COMMENT,
        payload
    }
}