import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { FETCH_ONE_COMMENT_FAILURE, FETCH_ONE_COMMENT_REQUEST, FETCH_ONE_COMMENT_SUCCESS, NO_COMMENT_SELECTED } from "./commentType";


const fetchTodosRequest=()=>{
    return{
        type:FETCH_ONE_COMMENT_REQUEST
    }
};
const fetchTodosFailure=(payload)=>{
    return{
        type:FETCH_ONE_COMMENT_FAILURE,
        payload
    }
};
const fetchTodosSuccess=(payload)=>{
    return{
        type:FETCH_ONE_COMMENT_SUCCESS,
        payload
    }
};
export const noCommentSelected=()=>{
    return{
        type:NO_COMMENT_SELECTED
    }
};


export const fetchTodos=()=>{
    return function(dispatch){
        dispatch(fetchTodosRequest());
        axios.get(`http://localhost:4000/comments`)
        .then(res=>{
            dispatch(fetchTodosSuccess(res.data));
            console.log(res.data)
        })
        .catch(err=>{
            dispatch(fetchTodosFailure(err.message))
        })
    }
}
