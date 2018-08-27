import React, {Component} from 'react';
import './style.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';


class Home extends Component{
    render(){
        return (
            <div id="app">
                <div id="back-top" styles={{opacity: '0.7'}} >
                </div>
                <header>
                <Navigation />
                <Sliders />
                </header>  
                <div className="content">
                    <div className="wrap">
                        <div col-md-5 img-thumbnail styles={{padding:'0'}}>
                            <div id="feedback">
                                <div className="container">
                                    <div className="col-md-5">
                                        <div className="form-area">  
                                            <form action="{{route('login')}}" method="POST">
                                                <br styles={{clear: 'both'}}/>
                                                            <h1 styles={{marginBottom: '60', textAlign:'left'}}>Login</h1>
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" styles={{width: '250'}} id="email" name="email" placeholder="Email" required/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="password" className="form-control" style={{width: '250'}} id="password" name="password" placeholder="Password" required />
                                                            </div>       
                                                    <button type="submit" id="submit" name="submit" className="btn btn-primary pull-right">Login</button>
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
export default Home;