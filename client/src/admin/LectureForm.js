import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addLecture } from '../actions/lectureActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LectureFormCourseList from './LectureFormCourseList';


class LectureForm extends React.Component {
    state = {
        name: '',
        course: '',
        myFile: '' 
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newLecture = {
            name: this.state.name,
            course: this.state.course,
            myFile: this.state.myFile
        }

        this.props.addLecture(newLecture);
        this.props.history.push('/admin/lectures');
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit} encType="multipart/form-data">
                <FormGroup>
                    <Label htmlFor="name">Lecture name</Label>
                    <Input type="text" name="name" style={{width:'250px'}} onChange={this.onChange} value={this.state.value} />
                </FormGroup>
                <FormGroup>
                    <Label for="courses">Course</Label>
                    <LectureFormCourseList/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="file">Browse:</Label>
                    <Input type="file" name="myFile"/>
                </FormGroup>
                <Button type="submit" className="btn">Create Lecture</Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    lecture: state.lecture,
    getCourses: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { addLecture })(withRouter(LectureForm));