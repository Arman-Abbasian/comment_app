import CommentList from "./components/CommentsList";
import CommentListContext from "./components/CommentsListContext";
import FullCommentsContext from "./components/FullCommentContext";
import Discussion from "./container/Disscussion";
import CommentProvider from "./Providers/CommentProvider";


function App() {
  return (
    
    <div className="App">
         {/* <Discussion /> */}
         <CommentProvider>
            <CommentListContext />
            <FullCommentsContext />
         </CommentProvider>
    </div>
  );
}

export default App;
