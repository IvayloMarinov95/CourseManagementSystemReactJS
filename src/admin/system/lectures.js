import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../style.css';
import '../../form.css';
import '../../admin.css';
import AdminNavigation from '../../components/AdminNavigation';

class Lectures extends React.Component{
    render(){
        return(
            <div id='lectures'>
            <AdminNavigation />
                <div className = "container">
                    <section id="post-admin">
                        <NavLink to="/admin/create-lecture"><a href="" className="btn">New Lecture</a></NavLink>
                    </section>
                </div>
                <section class="list">
                    {/* @foreach($lectures as $lecture)
                        <article>
                            <div class="post-info">
                                <h3>{{$lecture->name}}</h3>
                                <span class="info">{{$lecture->document_name}} | {{$lecture->created_at}}</span>
                            </div>
                            <div class="edit">
                                <nav>
                                    <ul>
                                        <li><a href="{{ route('admin.system.single', ['lecture_id' => $lecture->id]) }}">View Lecture</a></li>
                                        <li><a href="{{ route('admin.system.lecture.edit', ['lecture_id' => $lecture->id]) }}">Edit</a></li>
                                        <li><a href="{{ route('admin.system.lecture.delete', ['lecture_id' => $lecture->id]) }}" class="danger">Delete</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </article>
                    @endforeach */}
                </section>
            </div>
        );
    }
}
export default Lectures;