import React from 'react';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';

class CreatePost extends React.Component{
    render(){
        return(
            <div id= "create-posts">
                <AdminNavigation />
                <div className="container">
                    <form  method="post" action = "{{route('admin.system.post.create')}}">
                        <div className="input-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="input-group">
                            <label for="body">Body</label>
                            <textarea name="body" id="body" rows="12"></textarea>
                        </div>
                        <button type="submit" className="btn">Create Post</button>
                        <input type="hidden" name="_token" value="{{ Session::token() }}" />
                    </form>
                </div>
            </div>
        );
    }
}
export default CreatePost;