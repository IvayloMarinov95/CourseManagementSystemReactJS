import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import './modal.css';
import './admin.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';

class HomePage extends React.Component{
    render(){
        return(
            <div id= 'homepage'>
            <header>
                <UserNavigation />
                <Sliders />
            </header>
            <body>
                <div className="card card-holder">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/courses"><a href="" className="btn">See all courses</a></NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <ul>
                            {/* @foreach($courses as $course)
                                <li>
                                    <article>
                                        <div class="post-info">
                                            <h3><b><a href="{{route('course-single', ['id' => $course->id])}}">{{ $course->name }}</a></b></h3>
                                        </div>
                                    </article>
                                </li>
                            @endforeach */}
                        </ul> 
                    </section>
                </div>
                <div className="card card-holder">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/posts"><a href="" className="btn">See all posts</a></NavLink></li>
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
                                            <h3><b>{{ $post->name }}</b></h3>
                                            <div>{{$post->body}}</div>
                                            <br>
                                            
                                        </div>
                                        <div class="edit">
                                            <ul>
                                                <span class="info">{{ $post->created_at }}</span>
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                            @endforeach */}
                        </ul>
                    </section>
                </div>
                <div className="clearfix"></div>
                <div className="modal" id="contact-message-info">
                    <button className="btn" id="modal-close">Close</button>
                </div>
            </body>
            <footer>
                <Footer />
            </footer>
            </div>
        );
    }
}
export default HomePage;