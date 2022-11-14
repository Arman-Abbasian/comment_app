import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CommentContext=createContext();
const CommentContextDispatcher=createContext();
const SingleCommentContext=createContext();
const SingleCommentContextDispatcher=createContext();

const CommentProvider = ({children}) => {
    const [comments,setComments]=useState({comment:[],loading:false,error:""});
    const [singleComment,setSingleComment]=useState({singleComment:null,loading:false,error:"",message:''})
    return ( 
        <div>
            <CommentContext.Provider value={comments}>
                <CommentContextDispatcher.Provider value={setComments}>
                    <SingleCommentContext.Provider value={singleComment}>
                        <SingleCommentContextDispatcher.Provider value={setSingleComment}>
                            {children}
                        </SingleCommentContextDispatcher.Provider>
                    </SingleCommentContext.Provider>
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
    const addOneComment=(payload)=>{
            axios.post(`http://localhost:4000/comments`,payload)
            .then(res=>initialLoading())
            .catch(err=>console.log(err.message));
        };    
        
            return {initialLoading,addOneComment};
    };




export const useSingleComment=()=>useContext(SingleCommentContext);
export const useSingleCommentsActions=()=>{
    const singleComment=useSingleComment();
    const setSingleComment=useContext(SingleCommentContextDispatcher);

    const setNewId=(payload)=>{
       if(!payload){
        setSingleComment({singleComment:null,loading:false,error:'',message:'select a comment'})
       }else{
        axios.get(`http://localhost:4000/comments/${payload}`)
       .then(res=>{
        setSingleComment({singleComment:res.data,loading:false,error:'',message:''})
       })
       .catch(err=>{
        setSingleComment({singleComment:null,loading:false,error:err.message,message:''})
       })
       }
    }       
            return {setNewId};
    }