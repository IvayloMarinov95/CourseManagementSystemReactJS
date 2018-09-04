import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';
import LectureForm from '../LectureForm';
import store from '../../store';
import { Provider } from 'react-redux';

class CreateLecture extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id="create-lecture">
                <AdminNavigation />
                <div className="container">
                    <LectureForm />
                </div>
            </div>
            </Provider>
        );
    }
}
export default CreateLecture;