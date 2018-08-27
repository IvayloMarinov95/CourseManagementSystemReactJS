import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';
import { Provider } from 'react-redux';
import store from '../../store';
import CourseList from '../CourseList';
import CourseModal from '../CourseModal';

class AdminCourses extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
            <div id= "admin-courses">
                <AdminNavigation />
                <div className="container">
                    <section id="category-admin">
                        <CourseModal/>
                    </section>
                    <section className="list">
                        <CourseList />
                    </section>
                </div>
            </div>
            </Provider>
        );
    }
}

export default AdminCourses;