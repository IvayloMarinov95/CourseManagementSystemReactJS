import React from 'react';
import './style.css';
import './modal.css';
import './admin.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';

class Courses extends React.Component{
    render(){
        return(
            <div id= 'courses'>
            <header>
                <UserNavigation />
                <Sliders />
            </header>
            <body>
            <br/>
            <div>
                <div className="panel panel-primary panel-holder">
                    <div className="panel-heading">Courses</div>
                    {/* @foreach($courses as $course)
                    <div class="panel-body"><a href="{{route('course-single', ['id' => $course->id])}}">{{$course->name}}</a></div>
                    @endforeach */}
                </div>
            </div>
            </body>
            <footer>
                <Footer />
            </footer>
            </div>
        );
    }
}
export default Courses;