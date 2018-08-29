import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';
import { withRouter } from 'react-router-dom';


class PostForm extends React.Component {
    state = {
        name: '',
        body: ''
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value });
        this.setState({  [e.target.body]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newPost = {
           name: this.state.name,
           body: this.state.body
        }

        this.props.addPost(newPost);
        this.props.history.push('/admin/posts');
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="post">Name</Label>
                    <Input type="text" name="name" id="post" onChange={this.onChange}/>
                    <Label for="body">Body</Label>
                    <Input type="textarea" name="body" id="body" rows="12" onChange={this.onChange}/>
                    <br/>
                    <Button type="submit" className="btn">Create Post</Button>
                </FormGroup>
            </Form>
        );
    }

}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { addPost })(withRouter(PostForm));