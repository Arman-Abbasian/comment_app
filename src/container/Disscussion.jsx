import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CommentList from "../components/CommentsList";
import FullComments from "../components/FullComment";
import NewComment from "../components/NewComment";

const Discussion = () => {
    const [comments,setComments]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    const [commentId,setCommentId]=useState(null);


    useEffect(() => {
        const getUsers = async () => {
          try {
            const {data}=await axios.get(`http://localhost:4000/comments`);
            setLoading(false);
            setComments(data);
          } catch (err) {
            setError(err)
            toast.error(error.message)
          }
        }
    getUsers();
},[]);

const clickHandler=(id)=>{
  setCommentId(id)
}




       if (loading) return <p>loading ...</p>
       if (error) return <p>{error.message}</p> 
    return ( 
        <div className="flex flex-col gap-6 p-4">
            <CommentList comments={comments} clickHandler={clickHandler} commentId={commentId}  />
            <FullComments commentId={commentId} />
            <NewComment setComments={setComments} />
        </div>
     );
}
 
export default Discussion;