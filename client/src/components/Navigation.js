import React from 'react';
import {NavLink} from 'react-router-dom';


class Navigation extends React.Component {
    render(){
        return(
            <div>
            <nav className="navbar navbar-default">
                 
                    <div className="container-fluid">
                        {/* Brand and toggle get grouped for better mobile display  */}
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="">FDIBA</a>
                    </div>
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/register" >Register</NavLink></li>
                            <li><NavLink to="/contact">Contacts</NavLink></li>
                        </ul>
                       
                    </div>
                </div>
            </nav> 
            </div>
        );
    }
    
}

export default Navigation;