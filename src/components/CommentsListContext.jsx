import axios from "axios";
import { useEffect } from "react";
import { useComments, useCommentsActions } from "../Providers/CommentProvider";
import CommentContext from "./CommentContext";


const CommentListContext = () => {
    const {comment}=useComments();
    const {initialLoading}=useCommentsActions();
    console.log(comment);
    useEffect(()=>{
        initialLoading();
    },[]);
    
    return ( 
        <div className="flex flex-wrap gap-3">
            {comment.map(item=>(
                <CommentContext key={item.id} name={item.name} email={item.email} 
                 />
              ))}
        </div>
     );
}
 
export default CommentListContext;