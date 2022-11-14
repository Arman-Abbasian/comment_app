import axios from "axios";
import { ADD_ONE_COMMENT, DELETE_ONE_COMMENT,FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from "./commentsType";


const fetchTodosRequest=()=>{
    return{
        type:FETCH_TODOS_REQUEST
    }
};
const fetchTodosFailure=(payload)=>{
    return{
        type:FETCH_TODOS_FAILURE,
        payload
    }
};
const fetchTodosSuccess=(payload)=>{
    return{
        type:FETCH_TODOS_SUCCESS,
        payload
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