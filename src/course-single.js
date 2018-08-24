import React from 'react';
import './style.css';
import './modal.css';
import './admin.css';
import UserNavigation from './components/UserNavigation';
import Footer from './components/Footer';
import Sliders from './components/Sliders';

class CourseSingle extends React.Component{
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
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="panel panel-primary panel1-holder">
                                    <div className="panel-heading">Lectures</div>
                                    {/* @foreach($course->lectures as $lecture)
                                    <div class="panel-body"><a href="{{ $lecture->document }}">{{$lecture->name}}</a></div>
                                    @endforeach */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="panel panel-primary panel1-holder">
                                    <div className="panel-heading">
                                    <form action="{{route('post-coursework', ['course_id' => $course->id])}}" method = "post" enctype="multipart/form-data">
                                    {/* @csrf */}
                                        <span>Course Works&nbsp;|&nbsp;</span><input type="file" id="file" name="file" multiple />
                                        <div className="submit-holder clearfix">
                                            <input type="submit" value="Add" />
                                        </div>
                                    </form>
                                    </div>
                                    {/* @foreach($course->courseworks as $coursework)
                                    <div class="panel-body"><a href="{{ $coursework->document }}">{{$coursework->document_name}}</a></div>
                                    @endforeach */}
                                </div>
                            </div>
                        </div>
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
export default CourseSingle;