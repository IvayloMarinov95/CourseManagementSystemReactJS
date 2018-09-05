import React from 'react';
import './style.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import { Provider } from 'react-redux';
import store from './store';
import UserPostList from './UserPostList';

class Posts extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id= 'posts'>
            <header>
                <UserNavigation />
                <Sliders />
            </header>
            <br/>
            <div>
                <div class="panel panel-primary panel-holder">
                    <div class="panel-heading">Публикации</div>
                    <UserPostList />
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
            </div>
            </Provider>
        );
    }
}
export default Posts;