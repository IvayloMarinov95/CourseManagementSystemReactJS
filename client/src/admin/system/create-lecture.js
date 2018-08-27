import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';

class CreateLecture extends React.Component{
    render(){
        return(
            <div id="create-lecture">
                <AdminNavigation />
                <div className="container">
                    <form  method="post" action = "{{route('admin.system.lecture.create')}}" enctype="multipart/form-data">
                        <div className="input-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="input-group">
                            <label for="course">Course</label>
                            <select name="course" id="course">
                                {/* @foreach($courses as $course)
                                    <option value="{{ $course->id }}">{{$course->name }}</option>
                                @endforeach */}
                            </select>
                            <input type="hidden" name="courses" id="courses" />
                        </div>
                        <div className="file">
                            Browse: <input type="file" id="file" name="file" multiple />
                        </div>
                        <br/>
                        <button type="submit" className="btn">Create Lecture</button>
                        <input type="hidden" name="_token" value="{{ Session::token() }}" />
                    </form>
                </div>
            </div>
        );
    }
}
export default CreateLecture;