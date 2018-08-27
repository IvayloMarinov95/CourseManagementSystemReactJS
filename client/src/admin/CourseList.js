import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourses, deleteCourse } from '../actions/courseActions'; 



class CourseList extends React.Component{
    componentDidMount(){
        this.props.getCourses();
    }

    OnDeleteClick = (id) => {
        this.props.deleteCourse(id);    
    }

    render(){
        const { courses } = this.props.course;
        return(
           <ListGroup>
                {courses.map(({ _id, name }) => (
                     <ListGroupItem>
                    <article>
                        <div class="category-info">
                            <h3>{name}</h3>
                        </div>
                        <div class="edit">
                            <nav>
                                <ul>
                                    <li class="category-edit"><input type="text"/></li>
                                    <li><Button>Edit</Button></li>
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
    { getCourses, deleteCourse }
) (CourseList);