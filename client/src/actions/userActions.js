import axios from 'axios';
import { GET_USERS, ADD_USER, DELETE_USER, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';




export const getUsers = () => dispatch => {
    axios
        .get('/api/users')
        .then(res => 
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        )
};

export const addUser = user => dispatch => {
    axios
        .post('/api/users', user)
        .then(res =>
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
    )
};

export const deleteUser = (id) => dispatch => {
    axios
    .delete(`/api/users/${id}`)
        .then(res => dispatch({
            type: DELETE_USER,
            payload: id
        })
    )
};

export const loginUser = (user) => dispatch => {
    axios
    .post('/api/users/login', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            }
        )
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/');
}