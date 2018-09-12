import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../..//style.css';
import '../../form.css';
import '../../admin.css';
import PostEditForm from '../PostEditForm';
import store from '../../store';
import { Provider } from 'react-redux';

class EditPost extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id="edit-post">
                <AdminNavigation />
                <div className="container">
                    <PostEditForm/>
                </div>
            </div>
            </Provider>
        );
    }
}
export default EditPost