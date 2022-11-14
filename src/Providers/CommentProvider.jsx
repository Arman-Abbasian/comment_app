import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const CommentContext=createContext();
const CommentContextDispatcher=createContext();
const SingleCommentContext=createContext();
const SingleCommentContextDispatcher=createContext();

const CommentProvider = ({children}) => {
    const [comments,setComments]=useState({comment:[],loading:false,error:""});
    const [singleComment,setSingleComment]=useState({singleComment:null,loading:false,error:"",message:''})
    return ( 
        <div className="p-4">
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

    //get data
    const initialLoading=()=>{
        setComments({...comments,comment:[],loading:true,error:""})
        axios.get(`http://localhost:4000/comments`)
        .then(res=>setComments({...comments,comment:res.data,loading:false,error:""}))
        .catch(err=>setComments({...comments,comment:[],loading:false,error:err.message}));
    };
    //add one comment
    const addOneComment=(payload)=>{
            axios.post(`http://localhost:4000/comments`,payload)
            .then(res=>{
                initialLoading();
                toast.success("new data added successfully")
            })
            .catch(err=>toast.error(err.message));
        };
        //delete one comment
    const deleteOneComment=(payload)=>{
        axios.delete(`http://localhost:4000/comments/${payload}`)
        .then(res=>initialLoading())
        .catch(err=>toast.error(err.message));
    };     
        
            return {initialLoading,addOneComment,deleteOneComment};
    };




export const useSingleComment=()=>useContext(SingleCommentContext);
export const useSingleCommentsActions=()=>{
    const singleComment=useSingleComment();
    const setSingleComment=useContext(SingleCommentContextDispatcher);

    const setNewId=(payload=null)=>{
       if(!payload){
        setSingleComment({singleComment:null,loading:false,error:'',message:'select a comment'})
       }else{
        setSingleComment({singleComment:null,loading:true,error:'',message:''})
        axios.get(`http://localhost:4000/comments/${payload}`)
       .then(res=>{
        console.log(res.data)
        setSingleComment({singleComment:res.data,loading:false,error:'',message:''})
       })
       .catch(err=>{
        setSingleComment({singleComment:null,loading:false,error:err.message,message:''})
       })
       }
    }  ;
    
    const deleteOneCommentId=()=>{
        setSingleComment({singleComment:null,loading:false,error:'',message:'select a comment'});
        toast.success("data removed successfully")
    }

            return {setNewId,deleteOneCommentId};
    }