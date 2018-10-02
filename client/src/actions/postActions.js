import axios from 'axios';
import { GET_POSTS, SINGLE_POST , ADD_POST, DELETE_POST, POSTS_LOADING, UPDATE_POST } from './types';

export const getPosts = () => dispatch => {
    dispatch(setPostsLoading());
    axios 
        .get('/api/posts')
        .then(res => 
            dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    )
};

export const getSinglePost = (id,post) => dispatch => {
    axios
        .get(`/api/posts/${id}`, post)
        .then(res => 
        dispatch({
            type: SINGLE_POST,
            payload: res.data
        })
    )
}

export const addPost = post => dispatch => {
    axios
        .post('/api/posts', post)
        .then(res => 
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
};

export const editPost = (id, post) => dispatch => {
    axios
        .put(`/api/posts/${id}`, post)
        .then(res => 
        dispatch({
            type: UPDATE_POST,
            payload: res.data
        })
    )
}


export const deletePost = (id) => dispatch => {
    axios
    .delete(`/api/posts/${id}`)
    .then(res => dispatch({
        type: DELETE_POST,
        payload: id
        })
    );
};


export const setPostsLoading = () => {
    return{
        type: POSTS_LOADING
    };
};
