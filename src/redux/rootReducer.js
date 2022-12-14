import { combineReducers } from "redux";
import commentReducer from "./comment/commentReducer";
import commentsReducer from "./comments/commentsReducer";


const rootReducer=combineReducers({
    comment:commentReducer,
    comments:commentsReducer
});
export default rootReducer;
