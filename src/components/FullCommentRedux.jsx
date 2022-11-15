import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteCommentId, fetchComment, noCommentSelected } from "../redux/comment/commentActions";
import { deleteOneComment, fetchComments } from "../redux/comments/commentsActions";

const FullCommentRedux = () => {
    const comment=useSelector(state=>state.comment);
    const dispatch=useDispatch();

    useEffect(()=>{
       if(!comment.comment){
        dispatch( noCommentSelected());
        console.log(comment.message) 
       }else{
       dispatch(fetchComment());
    }
    console.log(comment)
    },[]);

    const deleteHandler=(id)=>{
        dispatch(deleteOneComment(id));
        dispatch(fetchComments());
        dispatch(deleteCommentId());
    }

    if(comment.message) return <p>{comment.message}</p>
    if (comment.loading) return <p>loading ...</p>
    if (comment.error) return <p>{comment.error.message}</p>
    if(comment.comment)
    return ( 
        <div className="bg-blue-300 p-1 overflow-hidden w-full md:w-1/2 xl:w-1/3 py-5 flex flex-col gap-4 rounded-sm">
            <div className="flex gap-2">
                <p>name:</p>
                <p>{comment.comment.name}</p>
            </div>
            <div className="flex gap-2">
                <p>email:</p>
                <p>{comment.comment.email}</p>
            </div>
            <div className="flex gap-2">
                <p>body:</p>
                <p>{comment.comment.body}</p>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={()=>deleteHandler(comment.comment.id)}   className="bg-red-500 p-4 rounded-md"><AiOutlineDelete /></button>
            </div>
        </div>
     );
}
 
export default FullCommentRedux;