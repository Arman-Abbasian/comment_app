import { current } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { getAsyncComments } from "../features/commentsSlice";
import { fetchComment } from "../redux/comment/commentActions";
import CommentReduxToolKit from "./CommentReduxToolKit";


const CommentsListReduxToolKit = () => {
    const comments=useSelector(state=>state.comments);
    //const comment=useSelector(state=>state.comment);
    const dispatch=useDispatch();
    console.log(comments)
    useEffect(()=>{
        dispatch(getAsyncComments());
    },[]);

    const clickHandler=(id)=>{
        dispatch(fetchComment(id))
    }

    if (comments.loading) return <p>loading...</p>
    if (comments.error!==null) return <p>{comments.error.message}</p>
    if(comments.comments===[]) return <p>no comment existed</p> 

    return ( 
        <div className="flex items-center justify-center flex-wrap gap-3 container mx-auto">
                {comments.comments.map(item=>{
               return  <CommentReduxToolKit key={item.id} name={item.name} email={item.email} 
                clickHandler={()=>clickHandler(item.id)}/>
            })}
        </div>
     );
}
 
export default CommentsListReduxToolKit;