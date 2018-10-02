import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getSinglePost, editPost } from '../actions/postActions';
import { withRouter } from 'react-router-dom';

class PostEditForm extends React.Component{

    componentWillMount(){
        // const proba = this.props.getSinglePost();
        // console.log(proba);
        const params = this.props;
        const index = this.props.location.pathname.split("/")[3];
        const post = params.post.posts[index];
        console.log(post);
        const pid = post._id;
        const pname = post.name;
        const pbody = post.body;
        this.setState({id: pid, name: pname, body: pbody})
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value, [e.target.body]: e.target.value } );
    }

    // handleChange = (e) => {
    //     this.setState({ [e.target.body]: e.target.value });
    // }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            name: this.state.name,
            body: this.state.body
        }
        this.props.editPost(this.state.id, post);
        this.props.history.push('/admin/posts');
    }

    render(){
        console.log(this.props)
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label htmlFor="post-name">Post name</Label>
                    <Input type="text" name="name" style={{width:'350px'}} onChange={this.onChange} value={this.state.name}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="post-body">Post body</Label>
                    <Input type="textarea" name="body" rows = "12" onChange={this.onChange} value={this.state.body}/>
                </FormGroup>
                <Button type="submit" className="btn">Save Post</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getSinglePost, editPost })(withRouter(PostEditForm));