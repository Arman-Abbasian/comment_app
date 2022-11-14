import CommentList from "./components/CommentsList";
import CommentListContext from "./components/CommentsListContext";
import FullCommentsContext from "./components/FullCommentContext";
import NewCommentContext from "./components/NewCommentContext";
import Discussion from "./container/Disscussion";
import CommentProvider from "./Providers/CommentProvider";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
    <div className="App">
         {/* <Discussion /> */}
         <CommentProvider>
            <CommentListContext />
            <FullCommentsContext />
            <NewCommentContext />
         </CommentProvider>
         <ToastContainer />
    </div>
  );
}

export default App;
