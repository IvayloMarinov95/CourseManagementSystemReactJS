import { GET_LECTURES, ADD_LECTURE, DELETE_LECTURE, LECTURES_LOADING, SINGLE_LECTURE, EDIT_LECTURE } from '../actions/types';

const initialState = {
    lectures: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LECTURES:
        return {
            ...state,
            lectures: action.payload,
            loading: false
        };
        case SINGLE_LECTURE:
        return{
            ...state,
            lectures: action.payload
        };
        case DELETE_LECTURE:
        return{
            ...state,
            lectures: state.lectures.filter(lecture => lecture._id !== action.payload)
        };
        case ADD_LECTURE:
        return{
            ...state,
            lectures: [action.payload, ...state.lectures]
        };
        case EDIT_LECTURE:
        return{
            ...state,
            lectures: [action.payload, ...state.lectures]
        }
        case LECTURES_LOADING:
        return{
            ...state,
            loading:true
        };
        default:
        return state;
    }
}