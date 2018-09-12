import React from 'react';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/userActions';


class UserNavigation extends React.Component{
    
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    {/* Brand and toggle get grouped for better mobile display  */}
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="{{route('index')}}">FDIBA</a>
                </div>
                
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li ><NavLink to="/homepage">Home</NavLink></li>
                        <li ><NavLink to="/courses">Courses</NavLink></li>
                        <li ><NavLink to="/user-contact">Contacts</NavLink></li>
                        <li ><a href="" onClick={this.onLogout.bind(this)}>Logout</a></li>
                    </ul>
                </div>
                </div>
            </nav> 
        );
    }
}

UserNavigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {logoutUser})(withRouter(UserNavigation));