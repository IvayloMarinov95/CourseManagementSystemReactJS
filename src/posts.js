import React from 'react';
import './style.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';

class Posts extends React.Component{
    render(){
        return(
            <div id= 'posts'>
            <header>
                <UserNavigation />
                <Sliders />
            </header>
            <br/>
            <div>
                <div class="panel panel-primary panel-holder">
                    <div class="panel-heading">Публикации</div>
                    {/* @if(count($posts)==0)
                        <h3>&nbsp;No Messages</h3>
                    @endif
                    @foreach($posts as $post)
                    <h3>&nbsp;<b>{{$post->name}}</b></h3>
                    <div class="panel-body">{{$post->body}} <br><br><span class="info">{{$post->created_at}}</span></div>
                    
                    @endforeach */}
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
            </div>
        );
    }
}
export default Posts;