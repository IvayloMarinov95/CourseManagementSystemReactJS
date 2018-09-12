import React, {Component} from 'react';
import './style.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import { Provider } from 'react-redux';
import store from './store';
import LogInForm from './components/LogInForm';



class Home extends Component{
   

    render(){
        return (
            <Provider store={store}>
            <div id="app">
                <div id="back-top" styles={{opacity: '0.7'}} >
                </div>
                <header>
                <Navigation />
                <Sliders />
                </header>  
                <div className="content">
                    <div className="wrap">
                        <div style={{padding:'0'}}>
                            <div id="feedback">
                                <div className="container">
                                    <div>
                                        <div className="form-area">  
                                            <LogInForm/>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </div>
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



export default Home;