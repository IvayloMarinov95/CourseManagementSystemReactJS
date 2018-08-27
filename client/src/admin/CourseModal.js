import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addCourse } from '../actions/courseActions';

class CourseModal extends React.Component {
    state = {
        name: ''
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newCourse = {
           name: this.state.name 
        }

        this.props.addCourse(newCourse);
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="course">Course name</Label>
                    <Input type="text" name="name" id="course" onChange={this.onChange}/>
                    <Button type="submit" className="btn">Create Course</Button>
                </FormGroup>
            </Form>
        );
    }

}

const mapStateToProps = state => ({
    course: state.course
});

export default connect(mapStateToProps, { addCourse })(CourseModal);