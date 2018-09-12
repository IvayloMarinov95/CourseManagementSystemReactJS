import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourses } from '../actions/courseActions';

class LectureFormCourseList extends React.Component{
    componentDidMount(){
        this.props.getCourses();
    }

    render(){
        const { courses } = this.props.course;
        return(
            <Input type="select" name="course" style={{width:'250px'}}>
                {courses.map(({_id, name}) =>(
                    <option key={_id}>{name}</option>
                ))}
            </Input>        
        );
    }
}

LectureFormCourseList.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
<<<<<<< HEAD
 }
=======
}
>>>>>>> 79189843419d2f7cdd8655e0f5cc306f7228ce43

const mapStateToProps = (state) => ({
    course: state.course
})

export default connect(mapStateToProps, {getCourses})(LectureFormCourseList);
