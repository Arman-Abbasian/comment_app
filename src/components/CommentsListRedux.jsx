import axios from "axios";
import { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { useComments, useCommentsActions, useSingleComment, useSingleCommentsActions } from "../Providers/CommentProvider";
import { fetchTodos } from "../redux/comments/commentsActions";
import CommentContext from "./CommentContext";


const CommentListRedux = () => {
    const comments=useSelector(state=>state.comments);
    const comment=useSelector(state=>state.comment);
    const dispatch=useDispatch();
    console.log(comments)
    useEffect(()=>{
        dispatch(fetchTodos());

    },[]);
    const clickHandler=(id)=>{
        dispatch()
    }
    if (comments.loading) return <p>loading...</p>
    if (comments.error!=='') return <p>{comments.error.message}</p>
    return ( 
        <div className="flex items-center justify-center flex-wrap gap-3 container mx-auto">
            {comments.comments.map(item=>(
                <CommentContext key={item.id} name={item.name} email={item.email} 
                clickHandler={()=>clickHandler(item.id)}/>
              ))}
        </div>
     );
}
 
export default CommentListRedux
;