import axios from "axios";
import { useEffect } from "react";
import { useComments, useCommentsActions, useSingleComment, useSingleCommentsActions } from "../Providers/CommentProvider";
import CommentContext from "./CommentContext";


const CommentListContext = () => {
    const comment=useComments();
    const {initialLoading}=useCommentsActions();
    console.log(comment.error)

    const singleComment=useSingleComment();
    const {setNewId}=useSingleCommentsActions();
    
    console.log(comment);
    useEffect(()=>{
        initialLoading();
        console.log(comment)
    },[]);
    if (comment.loading) return <p>loading...</p>
    if (comment.error!=='') return <p>{comment.error.message}</p>
    return ( 
        <div className="flex items-center justify-center flex-wrap gap-3 container mx-auto">
            {comment.comment.map(item=>(
                <CommentContext key={item.id} name={item.name} email={item.email} 
                clickHandler={()=>setNewId(item.id)}/>
              ))}
        </div>
     );
}
 
export default CommentListContext;