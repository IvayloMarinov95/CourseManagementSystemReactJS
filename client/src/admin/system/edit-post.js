import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../..//style.css';
import '../../form.css';
import '../../admin.css';

class EditPost extends React.Component{
    render(){
        return(
            <div id="edit-post">
                <AdminNavigation />
                <div className="container">
                    <form action="" method="post">
                        <div className="input-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="input-group">
                            <label for="body">Body</label>
                            <textarea name="body" id="body" rows="12"></textarea>
                        </div>
                        <button type="submit" className="btn">Save Post</button>
                        <input type="hidden" name="_token" value="{{ Session::token() }}" />
                        <input type="hidden" name="post_id" value="{{$post->id}}" />
                    </form>
                </div>
            </div>
        );
    }
}
export default EditPost