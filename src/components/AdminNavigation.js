import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style.css';
import '../admin.css';
import '../form.css';

class AdminNavigation extends React.Component{
    render() {
        return (
            <header class="top-nav">
                <nav>
                <ul>
                    <li><NavLink to="/admin/index">Dashboard</NavLink></li>
                    <li><NavLink to="/admin/lectures">Lectures</NavLink></li>
                    <li><NavLink to="/admin/courses">Courses</NavLink></li>
                    <li><NavLink to="/admin/posts">Posts</NavLink></li>
                    <li><NavLink to="/admin/logout">Logout</NavLink>
                                        <form id="logout-form" action="" method="POST" styles={{display: 'none'}}>
                                        </form></li>
                </ul>
            </nav>
        </header>
        );
    }
}
export default AdminNavigation;