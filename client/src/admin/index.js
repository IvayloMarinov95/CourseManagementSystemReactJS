import React from 'react';
import {NavLink} from 'react-router-dom';
import AdminNavigation from '../components/AdminNavigation';
import '../style.css';
import '../modal.css';
import '../admin.css';
import { Provider } from 'react-redux';
import store from '../store';
import PostList from './PostList'
import LectureList from './LectureList';


class AdminIndex extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id= "admin-index">
                    <AdminNavigation />
                    <div>
                        <div className="card">
                            <header>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/admin/create-lecture" className="btn">New Lecture></NavLink></li>
                                        <li><NavLink to="/admin/lectures" className="btn">Show all Lectures</NavLink></li>
                                    </ul>
                                </nav>
                            </header>
                            <section>
                            <LectureList />
                            </section>
                        </div>
                        <div className="card">
                            <header>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/admin/posts" className="btn">Show all Posts</NavLink></li>
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
            </div>
            </Provider>
        );
    }
}
export default AdminIndex;