const CommentContext = ({name,email,clickHandler}) => {
    return ( 
        <div onClick={clickHandler} className="bg-blue-500 p-1 overflow-hidden w-full md:w-1/2 xl:w-1/3 py-5 flex flex-col gap-4 rounded-sm">
            <div className="flex gap-2">
                <p>name:</p>
                <p>{name}</p>
            </div>
            <div className="flex gap-2">
                <p>email:</p>
                <p>{email}</p>
            </div>
        </div>
     );
}
 
export default CommentContext;