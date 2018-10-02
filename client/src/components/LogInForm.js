import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { withRouter } from 'react-router-dom';

class LogInForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
        this.handleInputChange =  this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const currentUser = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(currentUser, this.props.history);
        console.log(currentUser);

    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <br styles={{clear: 'both'}}/>
                    <h1 styles={{marginBottom: '60', textAlign:'left'}}>Login</h1>
                  <FormGroup>  
                    <div className="form-group">
                        <Input type="email" className="form-control" styles={{width: '250'}} id="email" name="email" placeholder="Email" onChange={this.handleInputChange} required/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="form-group">
                        <Input type="password" className="form-control" style={{width: '250'}} id="password" name="password" placeholder="Password" onChange={this.handleInputChange} required />
                    </div> 
                </FormGroup>      
                    <Button type="submit" id="submit" name="submit" className="btn btn-primary pull-right">Login</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { loginUser })(withRouter(LogInForm));