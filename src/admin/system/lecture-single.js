import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';

class LectureSingle extends React.Component{
    render(){
        return(
            <div id="lecture-single">
                <AdminNavigation />
                <div className="container">
                    <section id="post-admin">
                        <a href="">Edit Lecture</a>
                        <a href="" className = "danger">Delete</a>
                    </section>
                    <section className="post">
                        {/* <h1>{{$lecture->name}}</h1> */}
                        <h1> Lecture name </h1>
                        {/* <span className="info">{{$lecture->document_name}} | {{$lecture->created_at}}</span> */}
                        <span className="info">Lecture name | 17.08.2018</span>
                    </section>
                </div>
            </div>
        );
    }
}
export default LectureSingle;