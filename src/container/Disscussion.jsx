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




       if (loading) return <p>loading ...</p>
       if (error) return <p>{error.message}</p> 
    return ( 
        <div>
            <CommentList comments={comments} />
            <FullComments />
            <NewComment />
        </div>
     );
}
 
export default Discussion;