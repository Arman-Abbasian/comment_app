import Comment from "./Comment";

const CommentList = ({comments}) => {
    
    return ( 
        <div className="flex flex-wrap gap-3">
            {comments.map(item=>(
                <Comment key={item.id} name={item.name} email={item.email} />
              ))}
        </div>
     );
}
 
export default CommentList;