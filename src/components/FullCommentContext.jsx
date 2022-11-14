import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useSingleComment, useSingleCommentsActions } from "../Providers/CommentProvider";

const FullCommentsContext = () => {
    const singleComment=useSingleComment();
    const {setNewId}=useSingleCommentsActions();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setNewId();
    },[]);

    if(!singleComment) return <p>no comment choosed yet</p>
    if (singleComment.loading) return <p>loading ...</p>
    if (singleComment.error) return <p>{singleComment.error.message}</p>

    return ( 
        <div className="bg-blue-300 p-1 overflow-hidden w-full md:w-1/2 xl:w-1/3 py-5 flex flex-col gap-4 rounded-sm">
            <div className="flex gap-2">
                <p>name:</p>
                <p>{singleComment.name}</p>
            </div>
            <div className="flex gap-2">
                <p>email:</p>
                <p>{singleComment.email}</p>
            </div>
            <div className="flex gap-2">
                <p>body:</p>
                <p>{singleComment.body}</p>
            </div>
            <div className="flex items-center justify-center">
                <button  className="bg-red-500 p-4 rounded-md"><AiOutlineDelete /></button>
            </div>
        </div>
     );
}
 
export default FullCommentsContext;