import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useCommentsActions, useSingleComment, useSingleCommentsActions } from "../Providers/CommentProvider";

const FullCommentRedux = () => {
    const singleComment=useSingleComment();
    const {setNewId,deleteOneCommentId}=useSingleCommentsActions();
    const {deleteOneComment}=useCommentsActions();

    useEffect(()=>{
        setNewId();
        console.log(singleComment)
    },[]);

    const deleteHandler=(id)=>{
        deleteOneComment(id);
        deleteOneCommentId();
    }

    if(singleComment.message) return <p>{singleComment.message}</p>
    if (singleComment.loading) return <p>loading ...</p>
    if (singleComment.error) return <p>{singleComment.error.message}</p>
    if(singleComment.singleComment)
    return ( 
        <div className="bg-blue-300 p-1 overflow-hidden w-full md:w-1/2 xl:w-1/3 py-5 flex flex-col gap-4 rounded-sm">
            <div className="flex gap-2">
                <p>name:</p>
                <p>{singleComment.singleComment.name}</p>
            </div>
            <div className="flex gap-2">
                <p>email:</p>
                <p>{singleComment.singleComment.email}</p>
            </div>
            <div className="flex gap-2">
                <p>body:</p>
                <p>{singleComment.singleComment.body}</p>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={()=>deleteHandler(singleComment.singleComment.id)}   className="bg-red-500 p-4 rounded-md"><AiOutlineDelete /></button>
            </div>
        </div>
     );
}
 
export default FullCommentRedux;