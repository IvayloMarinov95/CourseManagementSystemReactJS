import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';

class EditLecture extends React.Component{
    render(){
        return(
            <div id='edit-course'>
                <AdminNavigation />
                <div className="container">
                <form action="" method="post">
                    <div className="input-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <button type="submit" className="btn">Save Course</button>
                    <input type="hidden" name="_token" value="{{ Session::token() }}" />
                    <input type="hidden" name="course_id" value="{{$course->id}}" />
                </form>
                </div>
            </div>
        );
    }
}
export default EditLecture;
