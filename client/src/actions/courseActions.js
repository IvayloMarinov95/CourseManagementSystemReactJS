import axios from 'axios';
import { GET_COURSES, ADD_COURSE, UPDATE_COURSE, DELETE_COURSE, COURSES_LOADING, SINGLE_COURSE } from './types';

export const getCourses = () => dispatch => {
    dispatch(setCoursesLoading());
    axios 
        .get('/api/courses')
        .then(res => 
            dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    )
};

export const getSingleCourse = (id, name, course) => dispatch => {
    axios
        .get(`/api/courses/${id}/${name}`, course)
        .then(res => 
        dispatch({
            type: SINGLE_COURSE,
            payload: res.data
        })
    )
};

export const addCourse = course => dispatch => {
    axios
        .post('/api/courses', course)
        .then(res => 
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            })
        )
};

export const editCourse = (id, course) => dispatch => {
    axios
        .put(`/api/courses/${id}`, course)
        .then(res => 
            dispatch({
                type: UPDATE_COURSE,
                payload: res.data
        })
    )
}

export const deleteCourse = (id) => dispatch => {
    axios
    .delete(`/api/courses/${id}`)
    .then(res => dispatch({
        type: DELETE_COURSE,
        payload: id
        })
    );
};


export const setCoursesLoading = () => {
    return{
        type: COURSES_LOADING
    };
};
