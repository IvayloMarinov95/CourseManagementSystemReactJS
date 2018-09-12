import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';
import PostForm from '../PostForm';
import { Provider } from 'react-redux';
import store from '../../store';

class CreatePost extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id= "create-posts">
                <AdminNavigation />
                <div className="container">
                    <PostForm/>
                </div>
            </div>
            </Provider>
        );
    }
}
export default CreatePost;