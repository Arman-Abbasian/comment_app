import { combineReducers } from "redux";
import commentReducer from "./comment/commentReducer";
import commentsReducer from "./comments/commentsReducer";


const rootReducer=combineReducers({
    comment:commentReducer,
    commsts:commentsReducer
});
export default rootReducer;
