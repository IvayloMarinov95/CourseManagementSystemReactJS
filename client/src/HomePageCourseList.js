import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCourses } from './actions/courseActions';


class HomePageCourseList extends React.Component {

    componentDidMount(){
        this.props.getCourses();
    }

    render() {
        const { courses } = this.props.course;
        return(
            <ListGroup>
                <article>
                {courses.map(({ _id, name }) => (
                    <ListGroupItem key={_id}>
                     <div className="post-info">
                     <h3><b>{name}</b></h3>
                     </div>
                     </ListGroupItem>
                ))}
                </article>
            </ListGroup>
        );
    }
}

HomePageCourseList.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    course: state.course
});

export default connect(mapStateToProps, { getCourses })(HomePageCourseList);