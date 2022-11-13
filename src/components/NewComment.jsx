import { useState } from "react";

const NewComment = () => {
    const [formValues,setFormValues]=useState({name:"",email:"",body:""})
    return ( 
        <div>
            <input type="text" name="name" value={formValues.name} placeholder="enter your name"/>
            <input type="text" name="name" value={formValues.name} placeholder="enter your name"/>
            <textarea name="body" cols="30" rows="10" value={formValues.body}></textarea>
        </div>
     );
}
 
export default NewComment;