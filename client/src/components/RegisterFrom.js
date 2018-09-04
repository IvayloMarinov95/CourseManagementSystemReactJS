import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { connect }  from 'react-redux';
import { addUser } from '../actions/userActions';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component{
    state = {
        name: '',
        email: '',
        password: ''
    }

    onChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.password]: e.target.value
         });
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        this.props.addUser(newUser);
        this.props.history.push('/homepage');
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Input onChange={this.onChange} type="text" className="form-control" style={{width:'200'}} id='name' name='name' placeholder="Name" value={this.state.name}/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={this.onChange} type="text" className="form-control" style={{width:'200'}} id='email' name='email' placeholder="Email" value={this.state.email}/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={this.onChange} type="password" className="form-control" style={{width:'200'}} id='password' name='password' placeholder="Password" value={this.state.password}/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={this.onChange} type="password" className="form-control" style={{width:'200'}} name='password_confirmation' placeholder="Confirm Password" value={this.state.password}/>
                </FormGroup>
                    <Button type="submit" id="btn" className="btn btn-primary pull-right">Register</Button>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { addUser })(withRouter(RegisterForm));