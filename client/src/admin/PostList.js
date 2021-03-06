import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../actions/postActions'; 
import { Link } from 'react-router-dom';



class PostList extends React.Component{
    componentDidMount(){
        this.props.getPosts();
    }

    OnDeleteClick = (id) => {
        this.props.deletePost(id);    
    }

    render(){
        const { posts } = this.props.post;
        console.log(posts);
        return(
           <ListGroup>
                {posts.map(({ _id, name, body }, index) => (
                     <ListGroupItem key={index}>
                    <article>
                        <div className="category-info">
                            <h3>{name}</h3>
                            <div>{body}</div>
                        </div>
                        <div className="edit">
                            <nav>
                                <ul>
                                    <li className="category-edit"><input type="text"/></li>
                                    <li><Link to={`/admin/edit-post/${index}/${_id}`}><Button>Edit</Button></Link></li>
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

PostList.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(
    mapStateToProps,
    { getPosts, deletePost }
)(PostList);