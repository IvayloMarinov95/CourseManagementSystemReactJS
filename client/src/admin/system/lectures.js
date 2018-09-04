import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../style.css';
import '../../form.css';
import '../../admin.css';
import AdminNavigation from '../../components/AdminNavigation';
import LectureList from '../LectureList';
import { Provider } from 'react-redux';
import store from '../../store';
import { Button } from 'reactstrap';

class Lectures extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div id='lectures'>
            <AdminNavigation />
                <div className = "container">
                    <section id="post-admin">
                        <NavLink to="/admin/create-lecture"><Button>New Lecture</Button></NavLink>
                    </section>
                </div>
                <section className="list">
                    <LectureList/>
                </section>
            </div>
            </Provider>
        );
    }
}
export default Lectures;