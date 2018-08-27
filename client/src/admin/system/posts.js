import React from 'react';
import {NavLink} from 'react-router-dom';
import AdminNavigation from '../../components/AdminNavigation';
import '../../style.css';
import '../../form.css';
import '../../admin.css';

class AdminPosts extends React.Component{
    render(){
        return(
            <div id= "posts">
                <AdminNavigation />
                <div className = "container">
                        <section id="post-admin">
                            <NavLink to="/admin/create-post"><a href="" className="btn">New Post</a></NavLink>
                        </section>
                </div>
                    <section className="list">
                    {/* @foreach($posts as $post)
                        <article>
                        <div class="post-info">
                            <h3><b>{{$post->name}}</b></h3>
                            <div>{{$post->body}}</div>
                        <br/>
                        </div>
                        <div className="edit">
                            <nav>
                                <ul>
                                    <li><a href="{{ route('admin.system.post.edit', ['post_id' => $post->id]) }}">Edit</a></li>
                                    <li><a href="{{ route('admin.system.post.delete', ['post_id' => $post->id]) }}" className="danger">Delete</a></li>
                                    <li> <span className="info"> | {{$post->created_at}}</span></li>
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
export default AdminPosts;