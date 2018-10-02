import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourses } from '../actions/courseActions';

class LectureFormCourseList extends React.Component{

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }
    componentDidMount(){
        this.props.getCourses();
    }

    render(){
        const { courses } = this.props.course;
        return(
            <Input type="select" name="course" style={{width:'250px'}} onChange={this.onChange} >
                {courses.map(({_id, name}) =>(
                    <option key={_id} >{name}</option>
                ))}
            </Input>        
        );
    }
}

LectureFormCourseList.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    course: state.course
})

export default connect(mapStateToProps, {getCourses})(LectureFormCourseList);
