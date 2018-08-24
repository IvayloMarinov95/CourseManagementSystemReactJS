import React from 'react';
import {NavLink} from "react-router-dom";

class UserNavigation extends React.Component{
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
                        <li ><NavLink to="/logout">Logout</NavLink></li>
                    </ul>
                </div>
                </div>
            </nav> 
        );
    }
}

export default UserNavigation;