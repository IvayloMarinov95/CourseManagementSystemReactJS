import React from 'react';
import { ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourses, getSingleCourse, deleteCourse } from '../actions/courseActions'; 



class CourseList extends React.Component{
    componentDidMount(){
        this.props.getCourses();
    }

    OnEditClick = () => {
        this.props.getSingleCourse();
    }

    OnDeleteClick = (id) => {
        this.props.deleteCourse(id);    
    }

    

    render(){
        const { courses } = this.props.course;
        return(
           <ListGroup>
                {courses.map(({ _id, name }) => (
                     <ListGroupItem key={_id}>
                    <article>
                        <div className="category-info">
                            <h3>{name}</h3>
                        </div>
                        <div className="edit">
                            <nav>
                                <ul>
                                    <li className="category-edit"><Input type="text"/></li>
                                    <Link to={`/admin/edit-course/${_id}/${name}`} ><Button onClick={this.OnEditClick.bind(this, _id, name)}>Edit</Button></Link>
                                    <li><Button className="danger" onClick={this.OnDeleteClick.bind(this, _id)}>Delete</Button></li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                    </ListGroupItem>
                ))}
           </ListGroup>
        );
    }
}

CourseList.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    course: state.course
});

export default connect(
    mapStateToProps,
    { getCourses, getSingleCourse, deleteCourse }
)(CourseList);