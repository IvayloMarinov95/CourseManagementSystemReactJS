import React from 'react';
import {NavLink} from 'react-router-dom';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';
import PostList from '../PostList';
import { Provider } from 'react-redux';
import store from '../../store';

class AdminPosts extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id= "posts">
                <AdminNavigation />
                <div className = "container">
                        <section id="post-admin">
                            <NavLink to="/admin/create-post" className="btn">New Post</NavLink>
                        </section>
                </div>
                    <section className="list">
                   <PostList/>
                    </section>
            </div>
            </Provider>
        );
    }
}
export default AdminPosts;