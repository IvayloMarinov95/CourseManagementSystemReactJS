import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../admin.css';
import '../../form.css';
import '../../style.css';
import LectureEditForm from '../LectureEditForm';
import { Provider } from 'react-redux';
import store from '../../store';

class EditLecture extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id= "edit-lecture">
                <AdminNavigation />
                <div className="container">
                    <LectureEditForm />
                </div>
            </div>
            </Provider>
        );
    }
}
export default EditLecture;