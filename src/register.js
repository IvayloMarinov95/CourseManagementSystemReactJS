import React, {Component} from 'react';
import './style.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: ''
            },
            submitted: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { name , value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    // handleSubmit(event){
    //     event.preventDefault();
        
    //     this.setState({submitted: true});
    //     const { user } = this.state;
    //     const { dispatch } = this.props;
    //     if(user.name && user.lastname && user.email && user.password){
    //         dispatch(userActions.register(user));
    //     }
    // }

    render(){
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return(
            <div id="app">
                <div id="back-top" styles={{opacity: '0.7'}} >
                </div>
                <header>
                    <Navigation />
                    <Sliders />
                </header>
                <div className="wrap">
                    <div col-md-5 img-thumbnail styles="padding: 0px;">
                        <div id="feedback"> <div className="container">
                        <div className="col-md-5">
                            <div className="form-area">  
                                <form name="form" >
                                <br styles={{clear: 'both' }}/>
                                            <h1 styles="margin-bottom: 60px; text-align: left;">Register</h1>
                                        <div className="form-group">
                                    <input type="text" className="form-control" styles={{width: '250'}} id="name" name="name" placeholder="Name" />
                                    </div>
                                            <div className="form-group">
                                    <input type="text" className="form-control" styles={{width: '250'}} id="lastname" name="lastname" placeholder="Lastname" />
                                    </div>
                                            <div className="form-group">
                                    <input type="text" className="form-control" styles={{width: '250'}} id="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                    <input type="password" className="form-control" styles={{width: '250'}} id="password" name="password" placeholder="Password"/>
                                    </div> 
                                    <div className="form-group">
                                    <input type="password" className="form-control" styles={{width: '250'}} name="password_confirmation" placeholder="Confirm Password"/>
                                    </div>         
                                <button type="submit" id="btn" className="btn btn-primary pull-right">Register</button>
                                </form>
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
function mapStateToProps(state){
    const { registering } = this.registration;
    return{
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(Register);
export { connectedRegisterPage as Register};
export default Register;

// ReactDOM.render(<Register />, document.getElementById('register'));