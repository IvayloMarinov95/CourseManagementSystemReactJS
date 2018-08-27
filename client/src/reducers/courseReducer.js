import { GET_COURSES, ADD_COURSE, DELETE_COURSE, COURSES_LOADING } from '../actions/types';

const initialState = {
    courses: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case DELETE_COURSE:
            return{
                ...state,
                courses: state.courses.filter(course => course._id !== action.payload)
            };
        case ADD_COURSE:
            return{
                ...state,
                courses: [action.payload, ...state.courses]
            };
            case COURSES_LOADING:
            return{
                ...state,
                loading:true
            };
        default:
        return state;
    }
}