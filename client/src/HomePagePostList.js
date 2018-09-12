import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from './actions/postActions';


class HomePagePostList extends React.Component {

    componentDidMount(){
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props.post;
        return(
            <ListGroup>
                <article>
                {posts.map(({ _id, name, body }) => (
                    <ListGroupItem key={_id}>
                     <div className="message-info">
                     <h3><b>{name}</b></h3>
                     <div>{body}</div>
                     </div>
                     </ListGroupItem>
                ))}
                </article>
            </ListGroup>
        );
    }
}

HomePagePostList.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(HomePagePostList);