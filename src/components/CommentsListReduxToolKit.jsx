import axios from "axios";
import { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { useComments, useCommentsActions, useSingleComment, useSingleCommentsActions } from "../Providers/CommentProvider";
import { fetchComment } from "../redux/comment/commentActions";
import { fetchComments } from "../redux/comments/commentsActions";
import CommentContext from "./CommentContext";


const CommentsListReduxToolKit = () => {
    const comments=useSelector(state=>state.comments);
    const comment=useSelector(state=>state.comment);
    const dispatch=useDispatch();
    console.log(comments)
    useEffect(()=>{
        console.log("use Effect")
        dispatch(fetchComments());
    },[]);
    const clickHandler=(id)=>{
        dispatch(fetchComment(id))
    }
    if (comments.loading) return <p>loading...</p>
    if (comments.error!=='') return <p>{comments.error.message}</p>
    if(comments.comments===null) return <p>no comment existed</p>
    return ( 
        <div className="flex items-center justify-center flex-wrap gap-3 container mx-auto">
            {comments.comments.map(item=>(
                <CommentContext key={item.id} name={item.name} email={item.email} 
                clickHandler={()=>clickHandler(item.id)}/>
              ))}
        </div>
     );
}
 
export default CommentsListReduxToolKit
;