import React, {Component} from 'react';
import './style.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import store from './store';
import { Provider } from 'react-redux';
import RegisterFrom from './components/RegisterFrom';

class Register extends Component {
 
    render(){
        return(
            <Provider store={store}>
            <div id="app">
                <div id="back-top" styles={{opacity: '0.7'}} >
                </div>
                <header>
                    <Navigation />
                    <Sliders />
                </header>
                <div className="wrap">
                    <div style={{padding: '0'}}>
                        <div id="feedback"> <div className="container">
                        <div className="col-md-5">
                            <div className="form-area">  
                                <RegisterFrom/>
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

export default Register;
