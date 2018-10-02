import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import './modal.css';
import './admin.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import { Provider } from 'react-redux';
import store from './store';
import HomePageCourseList from './HomePageCourseList';
import HomePagePostList from './HomePagePostList';
// import { getJwt } from './jwt';


class HomePage extends React.Component{

    // componentDidMount(){
    //     const jwt = getJwt("jwtToken");
    //     if(!jwt) {
    //         this.props.history.push('/');
    //     }
    // }
    render(){
        return(
            <Provider store={store}>
            <div id= 'homepage'>
            <header>
                <UserNavigation />
                <Sliders />
            </header>
            	<div className="card card-holder">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/courses" className="btn">See all courses</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <ul>
                            <HomePageCourseList />
                        </ul> 
                    </section>
                </div>
                <div className="card card-holder">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/posts" className="btn">See all posts</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <ul>
                            <HomePagePostList />
                        </ul>
                    </section>
                </div>
                <div className="clearfix"></div>
                <div className="modal" id="contact-message-info">
                    <button className="btn" id="modal-close">Close</button>
                </div>
            <footer>
                <Footer />
            </footer>
            </div>
            </Provider>
        );
    }
}
export default HomePage;