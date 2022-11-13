import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const FullComments = ({name,email,body,commentId,onRemove}) => {
    const [clickedComment,setClickedComment]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        if(commentId){
            axios.get(`http://localhost:4000/comments/${commentId}`)
            .then(res=>{
                setClickedComment(res.data);
                setLoading(false)
                console.log(clickedComment)
            })
            .catch(err=>toast.error(err.message))
        }
    },[commentId]);
    if(!commentId) return <p>no comment choosed yet</p>
    if (loading) return <p>loading ...</p>
    if (error) return <p>{error.message}</p>

    return ( 
        <div className="bg-blue-300 p-1 overflow-hidden w-full md:w-1/2 xl:w-1/3 py-5 flex flex-col gap-4 rounded-sm">
            <div className="flex gap-2">
                <p>name:</p>
                <p>{clickedComment.name}</p>
            </div>
            <div className="flex gap-2">
                <p>email:</p>
                <p>{clickedComment.email}</p>
            </div>
            <div className="flex gap-2">
                <p>body:</p>
                <p>{clickedComment.body}</p>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={()=>onRemove(commentId)} className="bg-red-500 p-4 rounded-md"><AiOutlineDelete /></button>
            </div>
        </div>
     );
}
 
export default FullComments;