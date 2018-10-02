import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLectures, getSingleLecture, deleteLecture } from '../actions/lectureActions';

class LectureList extends React.Component{
    componentDidMount(){
        this.props.getLectures();
    }

    onDeleteClick = (id) => {
        this.props.deleteLecture(id);
    }

    render(){
        const { lectures } = this.props.lecture;
        return(
            <ListGroup>
                {lectures.map(({ _id, name, myFile, date }, index) => (
                    <ListGroupItem key={index}>
                        <article>
                            <div className="post-info">
                                <h3>{name}</h3>
                                <span className="info">{myFile} | {date}</span>
                            </div>
                            <div className="edit">
                                <nav>
                                    <ul>
                                        <li><Link to={`/admin/edit-lecture/${index}/${_id}`}><Button>Edit</Button></Link></li>
                                        <li><Button className="danger" onClick={this.onDeleteClick.bind(this, _id)}>Delete</Button></li>
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

LectureList.propTypes = {
    getLectures: PropTypes.func.isRequired,
    lecture: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    lecture: state.lecture
});

export default connect(mapStateToProps, { getLectures, getSingleLecture, deleteLecture })(LectureList);