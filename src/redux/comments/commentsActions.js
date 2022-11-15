import axios from "axios";
import { ADD_ONE_COMMENT, DELETE_ONE_COMMENT,FETCH_COMMENTS_FAILURE,FETCH_COMMENTS_REQUEST,FETCH_COMMENTS_SUCCESS} from "./commentsType";


const fetchTodosRequest=()=>{
    return{
        type:FETCH_COMMENTS_REQUEST
    }
};
const fetchTodosFailure=(payload)=>{
    return{
        type:FETCH_COMMENTS_FAILURE,
        payload
    }
};
const fetchTodosSuccess=(payload)=>{
    return{
        type:FETCH_COMMENTS_SUCCESS,
        payload
    }
};

export const fetchComments=()=>{
    return function(dispatch){
        dispatch(fetchTodosRequest());
        axios.get(`http://localhost:4000/comments`)
        .then(res=>{
            dispatch(fetchTodosSuccess(res.data));
        })
        .catch(err=>{
            dispatch(fetchTodosFailure(err.message))
        })
    }
}
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