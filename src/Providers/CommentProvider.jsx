import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CommentContext=createContext();
const CommentContextDispatcher=createContext();

const CommentProvider = ({children}) => {
    const [comments,setComments]=useState({comment:[],loading:false,error:""})
    return ( 
        <div>
            <CommentContext.Provider value={comments}>
                <CommentContextDispatcher.Provider value={setComments}>
                    {children}
                </CommentContextDispatcher.Provider>
            </CommentContext.Provider>
        </div>
     );
}
 
export default CommentProvider;
export const useComments=()=>useContext(CommentContext);
export const useCommentsActions=()=>{
    const comments=useComments();
    const setComments=useContext(CommentContextDispatcher);

    const initialLoading=()=>{
        setComments({...comments,comment:[],loading:true,error:""})
        axios.get(`http://localhost:4000/comments`)
        .then(res=>setComments({...comments,comment:res.data,loading:false,error:""}))
        .catch(err=>setComments({...comments,comment:[],loading:false,error:err.message}));
    }
     
        // const changeCompletedCondition=(payload)=>{
        //     axios.put(`http://localhost:4000/todos/${payload.id}`,payload)
        //     .then(res=>initialLoading())
        //     .catch(err=>console.log(err.message));
        // };
        // const  addOneTodo=(payload)=>{
        //     axios.post(`http://localhost:4000/todos`,payload)
        //     .then(res=>initialLoading())
        //     .catch(err=>console.log(err.message));
        // };
        // const removeOneTodo=(id)=>{
        //     axios.delete(`http://localhost:4000/todos/${id}`)
        //     .then(res=>initialLoading())
        //     .catch(err=>console.log(err.message));
        // };     
        
            return {initialLoading};
    }