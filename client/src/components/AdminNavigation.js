import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style.css';
import '../admin.css';
import '../form.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/userActions';

class AdminNavigation extends React.Component{
    
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        return (
            <header className="top-nav">
                <nav>
                <ul>
                    <li><NavLink to="/admin/index">Dashboard</NavLink></li>
                    <li><NavLink to="/admin/lectures">Lectures</NavLink></li>
                    <li><NavLink to="/admin/courses">Courses</NavLink></li>
                    <li><NavLink to="/admin/posts">Posts</NavLink></li>
                    <li><a href="" onClick={this.onLogout.bind(this)}>Logout</a></li>
                </ul>
            </nav>
        </header>
        );
    }
}

AdminNavigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {logoutUser})(withRouter(AdminNavigation));