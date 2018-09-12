import axios from 'axios';
import { GET_LECTURES, ADD_LECTURE, EDIT_LECTURE, DELETE_LECTURE, LECTURES_LOADING, SINGLE_LECTURE } from './types';

export const getLectures = () => dispatch => {
    dispatch(setLecturesLoading());
    axios
        .get('/api/lectures')
        .then(res =>
        dispatch({
            type: GET_LECTURES,
            payload: res.data
        })
    )
};

export const getSingleLecture = (id, name, lecture) => dispatch => {
    axios   
        .get(`/api/lectures/${id}/${name}`, lecture)
        .then(res =>
        dispatch({
            type: SINGLE_LECTURE,
            payload: res.data
        })
    )
};

export const editLecture = (id, lecture) => dispatch => {
    axios
        .put(`/api/lectures/${id}`, lecture)
        .then(res =>
        dispatch({
            type: EDIT_LECTURE,
            payload: res.data
        })
    )
};

export const addLecture = lecture => dispatch => {
    axios
        .post('/api/lectures', lecture)
        .then(res => 
        dispatch({
            type: ADD_LECTURE,
            payload: res.data
        })
    )
};

export const deleteLecture = (id) => dispatch => {
    axios
        .delete(`/api/lectures/${id}`)
        .then(res => dispatch({
            type: DELETE_LECTURE,
            payload: id
        })
    )
};

export const setLecturesLoading = () => {
    return{
        type: LECTURES_LOADING
    };
};