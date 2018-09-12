import React, {Component} from 'react';
import './style.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';

class Contact extends Component{
    render(){
        return(
            <div id="app">
                <div id="back-top" styles={{opacity: '0.7'}} >
                </div>
                <header>
                    <Navigation />
                    <Sliders />
                </header>  
                    <div className="wrap">
                        <div className="two" >
                        <br styles={{clear: 'both'}}/>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1467.1953346755436!2d23.354433!3d42.653076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2973b731c3059638!2zTWljcm9zb2Z0IElUINCw0LrQsNC00LXQvNC40Y8g0LrRitC8INCk0LDQk9CY0J7Qn9CcINC_0YDQuCDQotCjLdCh0L7RhNC40Y8!5e0!3m2!1sbg!2sus!4v1516280133228" title="Location" width="500" height="400" frameBorder="0" styles={{border:'0'}} allowFullScreen></iframe>
                        </div>
                        <div className="one">
<<<<<<< HEAD
                        <div style={{padding: '0'}}>
                            <div id="feedback"> <div className="container">
                                <div>
=======
                        <div styles={{padding: '0'}}>
                            <div id="feedback"> <div className="container">
                                <div className="col-md-5">
>>>>>>> 79189843419d2f7cdd8655e0f5cc306f7228ce43
                                    <div className="form-area">  
                                        <form action="{{route('message-sent')}}" method="post">
                                        <br styles={{clear: 'both'}}/>
                                                    <h1 styles="margin-bottom: 60px; text-align: left;">Contacts</h1>
                                            <div className="form-group">
                                            <input type="text" className="form-control" styles={{width: '250'}} id="name" name="name" placeholder="Name" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" styles={{width: '250'}} id="phone" name="phone" placeholder="Phone" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" styles={{width: '350'}} id="email" name="email" placeholder="Email" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" styles={{width: '350'}} id="subject" name="subject" placeholder="About" required/>
                                        </div>
                                                    <div className="form-group">
<<<<<<< HEAD
                                                    <textarea className="form-control" type="textarea" name="body" id="body" placeholder="Message" maxlength="500" rows="12"></textarea>
=======
                                                    <textarea className="form-control" type="textarea" name="body" id="body" placeholder="Message" maxLength="500" rows="12"></textarea>
>>>>>>> 79189843419d2f7cdd8655e0f5cc306f7228ce43
                                                        <span className="help-block"><p id="characterLeft" className="help-block ">Limit: 500 symbols</p></span>                    
                                                    </div>
                                            
                                        <button type="submit" id="submit" name="submit" className="btn btn-primary pull-right">Send</button>
                                        </form>
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
        );
    }
}
export default Contact;