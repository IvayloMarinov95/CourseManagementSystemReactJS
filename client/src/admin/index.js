import React from 'react';
import {NavLink} from 'react-router-dom';
import AdminNavigation from '../components/AdminNavigation';
import '../style.css';
import '../modal.css';
import '../admin.css';
import CourseList from './CourseList';
import { Provider } from 'react-redux';
import store from '../store';
import PostList from './PostList'


class AdminIndex extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id= "admin-index">
                    <AdminNavigation />
                <body>
                    <div>
                        <div className="card">
                            <header>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/admin/create-lecture"><a href="" className="btn">New Lecture</a></NavLink></li>
                                        <li><NavLink to="/admin/lectures"><a href="" className="btn">Show all Lectures</a></NavLink></li>
                                    </ul>
                                </nav>
                            </header>
                            <section>
                            <CourseList />
                            </section>
                        </div>
                        <div className="card">
                            <header>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/admin/posts"><a href="" className="btn">Show all Posts</a></NavLink></li>
                                    </ul>
                                </nav>
                            </header>
                            <section>
                               <PostList />
                            </section>
                        </div>
                    </div>
                    <div className="modal" id="contact-message-info">
                        <button className="btn" id="modal-close">Close</button>
                    </div>
                </body>
            </div>
            </Provider>
        );
    }
}
export default AdminIndex;