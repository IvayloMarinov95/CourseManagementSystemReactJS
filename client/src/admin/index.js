import React from 'react';
import {NavLink} from 'react-router-dom';
import AdminNavigation from '../components/AdminNavigation';
import '../style.css';
import '../modal.css';
import '../admin.css';

class AdminIndex extends React.Component{
    render(){
        return(
            <div id= "admin-index">
                    <AdminNavigation />
                <body>
                    <div>
                        <div className="card">
                            <header>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/admin/create-lecture"><a href="" className="btn">New Lecture</a></NavLink></li>
                                        <li><NavLink to="/admin/lectures"><a href="" className="btn">Show all Lectures</a></NavLink></li>
                                    </ul>
                                </nav>
                            </header>
                            <section>
                                <ul>
                                    {/* @foreach($lectures as $lecture)
                                        <li>
                                            <article>
                                                <div class="post-info">
                                                    <h3>{{ $lecture->name }}</h3>
                                                    <span class="info">{{ $lecture->created_at }}</span>
                                                </div>
                                                <div class="edit">
                                                    <ul>
                                                        <li><a href="{{ route('admin.system.single', ['lecture_id' => $lecture->id]) }}">View Lecture</a></li>
                                                        <li><a href="{{ route('admin.system.lecture.edit', ['lecture_id' => $lecture->id]) }}">Edit</a></li>
                                                        <li><a href="{{ route('admin.system.lecture.delete', ['lecture_id' => $lecture->id]) }}" class="danger">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </article>
                                        </li>
                                    @endforeach */}
                                </ul> 
                            </section>
                        </div>
                        <div className="card">
                            <header>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/admin/posts"><a href="" className="btn">Show all Posts</a></NavLink></li>
                                    </ul>
                                </nav>
                            </header>
                            <section>
                                <ul>
                                    {/* @if(count($posts)==0)
                                        <li>No Messages</li>
                                    @endif
                                    @foreach($posts as $post)
                                        <li>
                                            <article data-message="{{ $post->body }}" data-id="{{ $post->id }}">
                                                <div class="message-info">
                                                    <h3>{{ $post->name }}</h3>
                                                    <span class="info">{{ $post->created_at }}</span>
                                                </div>
                                                <div class="edit">
                                                    <ul>
                                                        <li><a href="">View</a></li>
                                                        <li><a href="" class="danger">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </article>
                                        </li>
                                    @endforeach */}
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="modal" id="contact-message-info">
                        <button className="btn" id="modal-close">Close</button>
                    </div>
                </body>
            </div>
        );
    }
}
export default AdminIndex;