import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const NewComment = ({setComments}) => {
    const [formValues,setFormValues]=useState({name:"",email:"",body:""});
    const changeHandler=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value});
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/comments`,formValues)
        .then(res=>{
            axios.get(`http://localhost:4000/comments`)
            .then(res=>setComments(res.data));
            setFormValues({name:"",email:"",body:""})
        })
        .catch(err=>toast.error(err.message))
        
    }
    return ( 
        <div>
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
                <div className="flex gap-4 w-full">
                    <input className="form-input w-1/2 ring-1 ring-blue-700 rounded-sm" type="text" name="name" value={formValues.name} onChange={changeHandler} placeholder="enter your name"/>
                    <input className="form-input w-1/2 ring-1 ring-blue-700 rounded-sm" type="email" name="email" value={formValues.email} onChange={changeHandler} placeholder="enter your name"/>
                </div>
                <textarea className=" w-full form-input ring-1 ring-blue-700 rounded-sm" name="body" rows="5" value={formValues.body} onChange={changeHandler}></textarea>
                <input type="submit" value="Add" className="bg-blue-500 p-2 rounded-sm" />
            </form>
        </div>
     );
}
 
export default NewComment;