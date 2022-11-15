import CommentList from "./components/CommentsList";
import CommentListContext from "./components/CommentsListContext";
import FullCommentsContext from "./components/FullCommentContext";
import NewCommentContext from "./components/NewCommentContext";
import Discussion from "./container/Disscussion";
import CommentProvider from "./Providers/CommentProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from "react-redux";
import CommentListRedux from "./components/CommentsListRedux";
import FullCommentRedux from "./components/FullCommentRedux";
import NewCommentRedux from "./components/NewCommentRedux";
import store from './redux/store';


function App() {
  return (
    
    <div className="App">
         {/* <Discussion /> */}

         {/* <CommentProvider>
            <CommentListContext />
            <FullCommentsContext />
            <NewCommentContext />
         </CommentProvider> */}

         <Provider store={store}>
            <CommentListRedux />
            {/* <FullCommentRedux /> */}
            <NewCommentRedux />
         </Provider>

         <ToastContainer />
    </div>
  );
}

export default App;
