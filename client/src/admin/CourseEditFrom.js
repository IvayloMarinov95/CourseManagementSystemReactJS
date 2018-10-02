import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getSingleCourse, editCourse } from '../actions/courseActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';



class CourseEditForm extends React.Component{
    
    state = {
        name: ''
    }

    componentWillMount(){
        const params = this.props;
        const index = this.props.location.pathname.split("/")[3];
        const course = params.course.courses[index];
        const cid = course._id;
        const cname = course.name;
        this.setState({id: cid, name: cname });
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
    }

    onSubmit = (e)  => {
        e.preventDefault();

        const oldCourse = {
            name: this.state.name
        }
        this.props.editCourse(this.state.id, oldCourse);
        this.props.history.push('/admin/courses');



    }

    render(){
        // const id = this.props.location.pathname.split("/")[3]
        // this.state.id = id;
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="course">Course name</Label>
                    <Input type="text" name="name" id="course" style={{width:'350px'}} onChange={this.onChange} value={this.state.name} />
                    </FormGroup>
                    <Button type="submit" className="btn">Save Course</Button>
            </Form>
        )
    }
}

CourseEditForm.propTypes = {
    getSingleCourse: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    course: state.course
});

export default connect(mapStateToProps, { getSingleCourse, editCourse })(withRouter(CourseEditForm));