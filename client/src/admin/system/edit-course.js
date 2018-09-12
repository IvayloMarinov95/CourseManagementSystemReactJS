import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';
import { Provider } from 'react-redux';
import store from '../../store.js';
import CourseEditFrom from '../CourseEditFrom';

class EditCourse extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id='edit-course'>
                <AdminNavigation />
                <div className="container">
                <CourseEditFrom/>
                </div>
            </div>
            </Provider>
        );
    }
}
export default EditCourse;
