import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from './actions/postActions';


class UserPostList extends React.Component {

    componentDidMount(){
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props.post;
        return(
            <ListGroup>
                {posts.map(({ _id, name,  body, date }) => (
                    <ListGroupItem key={_id}>
                     <h3>&nbsp;<b>{name}</b></h3>
                    <div className="panel-body">{body} <br/> <br/> <span className="info">{date}</span></div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

UserPostList.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(UserPostList);