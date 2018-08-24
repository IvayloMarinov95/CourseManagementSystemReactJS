import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';

class AdminCourses extends React.Component{
    render(){
        return(
            <div id= "admin-courses">
                <AdminNavigation />
                <div className="container">
                    <section id="category-admin">
                        <form method="post" action="">
                            <div className="input-group">
                                <label for="name">Course name</label>
                                <input type="text" name="name" id="name"/>
                                <button type="submit" className="btn">Create Course</button>
                            </div>
                        </form>
                    </section>
                    <section className="list">
                        {/* @foreach($courses as $course)
                            <article>
                                <div class="category-info" data-id="{{ $course->id }}">
                                    <h3>{{ $course->name }}</h3>
                                </div>
                                <div class="edit">
                                    <nav>
                                        <ul>
                                            <li class="category-edit"><input type="text"/></li>
                                            <li><a href="{{ route('admin.system.course.edit', ['course_id' => $course->id]) }}">Edit</a></li>
                                            <li><a href="{{ route('admin.system.course.delete', ['course_id' => $course->id]) }}" class="danger">Delete</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </article>
                        @endforeach */}
                    </section>
                </div>
            </div>
        );
    }
}
export default AdminCourses;