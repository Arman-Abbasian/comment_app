import CommentList from "./components/CommentsList";
import CommentListContext from "./components/CommentsListContext";
import FullCommentsContext from "./components/FullCommentContext";
import NewCommentContext from "./components/NewCommentContext";
import Discussion from "./container/Disscussion";
import CommentProvider from "./Providers/CommentProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from "react-redux";
//import store from './redux/store';
import CommentListRedux from "./components/CommentsListRedux";
import FullCommentRedux from "./components/FullCommentRedux";
import NewCommentRedux from "./components/NewCommentRedux";




import {store} from './features/store';
import CommentListReduxToolKit from './components/CommentsListReduxToolKit';
import FullCommentReduxToolKit from "./components/FullCommentReduxToolKit";
import NewCommentReduxToolKit from "./components/NewCommentReduxToolKit";




import { Toaster } from 'react-hot-toast';


function App() {
  return (
    
    <div className="App flex flex-col gap-4 p-4">
         {/* <Discussion /> */}

         {/* <CommentProvider>
            <CommentListContext />
            <FullCommentsContext />
            <NewCommentContext />
         </CommentProvider> */}

         {/* <Provider store={store}>
            <CommentListRedux />
            <FullCommentRedux />
            <NewCommentRedux />
         </Provider> */}

         <Provider store={store}>
            <CommentListReduxToolKit />
            <FullCommentReduxToolKit />
            <NewCommentReduxToolKit />
         </Provider>



         <Toaster />
         <ToastContainer />
    </div>
  );
}

export default App;
