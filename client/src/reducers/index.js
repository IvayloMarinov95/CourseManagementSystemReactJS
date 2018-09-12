import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import postReducer from './postReducer';
import userReducer from './userReducer'; 
import lectureReducer from './lectureReducer';

export default combineReducers({
    course: courseReducer,
    post: postReducer,
    user: userReducer,
    lecture: lectureReducer
})