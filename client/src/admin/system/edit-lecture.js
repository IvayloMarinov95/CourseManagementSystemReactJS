import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../admin.css';
import '../../form.css';
import '../../style.css';

class EditLecture extends React.Component{
    render(){
        return(
            <div id= "edit-lecture">
                <AdminNavigation />
                <div className="container">
                    <form action="" method="post">
                        <div className="input-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <button type="submit" className="btn">Save Lecture</button>
                        <input type="hidden" name="_token" value="{{ Session::token() }}" />
                        <input type="hidden" name="lecture_id" value="{{$lecture->id}}" />
                    </form>
                </div>
            </div>
        );
    }
}
export default EditLecture;