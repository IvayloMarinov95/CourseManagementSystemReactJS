import React from 'react';
import './style.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';

class UserContact extends React.Component{
    render(){
        return(
            <div id="user-contacts">
                <div id="back-top" styles={{opacity: '0.7'}} >
                </div>
                <header>
                    <UserNavigation />
                    <Sliders />
                </header>  
                <body>
                    <div class="wrap">
                        <div class="two" >
                        <br styles={{clear: 'both'}}/>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1467.1953346755436!2d23.354433!3d42.653076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2973b731c3059638!2zTWljcm9zb2Z0IElUINCw0LrQsNC00LXQvNC40Y8g0LrRitC8INCk0LDQk9CY0J7Qn9CcINC_0YDQuCDQotCjLdCh0L7RhNC40Y8!5e0!3m2!1sbg!2sus!4v1516280133228" width="500" height="400" frameborder="0" styles={{border:'0'}} allowfullscreen></iframe>
                        </div>
                        <div class="one">
                        <div col-md-5 img-thumbnail styles={{padding: '0'}}>
                            <div id="feedback"> <div class="container">
                                <div class="col-md-5">
                                    <div class="form-area">  
                                        <form role="form" action="{{route('message-sent')}}" method="post">
                                        <br styles={{clear: 'both'}}/>
                                                    <h1 styles="margin-bottom: 60px; text-align: left;">Contacts</h1>
                                            <div class="form-group">
                                            <input type="text" class="form-control" styles={{width: '250'}} id="name" name="name" placeholder="Name" required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" styles={{width: '250'}} id="phone" name="phone" placeholder="Phone" required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" styles={{width: '350'}} id="email" name="email" placeholder="Email" required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" styles={{width: '350'}} id="subject" name="subject" placeholder="About" required/>
                                        </div>
                                                    <div class="form-group">
                                                    <textarea class="form-control" type="textarea" name="body" id="body" placeholder="Message" maxlength="500" rows="12"></textarea>
                                                        <span class="help-block"><p id="characterLeft" class="help-block ">Limit: 500 symbols</p></span>                    
                                                    </div>
                                            
                                        <button type="submit" id="submit" name="submit" class="btn btn-primary pull-right">Send</button>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        </div>
                    </div>
                </body>
                <footer> 
                    <Footer />
            </footer>
            </div>
        );
    }
}
export default UserContact;