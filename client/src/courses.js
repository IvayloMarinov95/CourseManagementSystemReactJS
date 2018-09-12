import React from 'react';
import './style.css';
import './modal.css';
import './admin.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import { Provider } from 'react-redux';
import store from './store';
import UserCourseList from './UserCourseList';

class Courses extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id= 'courses'>
            <header>
                <UserNavigation />
                <Sliders />
            </header>
            <br/>
            <div>
                <div className="panel panel-primary panel-holder">
                    <div className="panel-heading">Courses</div>
                   <UserCourseList />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
            </div>
            </Provider>
        );
    }
}



export default Courses;