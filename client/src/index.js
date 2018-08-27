import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
    Route,
    Switch
    } from "react-router-dom";
import './style.css';
// import App from './App';
import HomePage from './homepage';
import Contact from './contact';
import Register from './register';
import Home from './home';
import UserContact from './user-contact';
import Posts from './posts';
import Courses from './courses';
import CourseSingle from './course-single';
import AdminIndex from './admin/index';
import Lectures from './admin/system/lectures';
import CreateLecture from './admin/system/create-lecture';
import EditLecture from './admin/system/edit-lecture';
import AdminCourses from './admin/system/courses';
import EditCourses from './admin/system/edit-course';
import AdminPosts from './admin/system/posts';
import CreatePost from './admin/system/create-post';
import EditPost from './admin/system/edit-post';
import LectureSingle from './admin/system/lecture-single';

const app = (
<Router>
    <div>
    <Switch>    
    <Route exact path="/" component={Home}/>
    <Route path="/register" component={Register}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/homepage" component={HomePage}/>
    <Route path="/user-contact" component={UserContact}/>
    <Route path="/courses" component={Courses}/>
    <Route path="/posts" component={Posts}/>
    <Route path="/admin/index" component={AdminIndex}/>
    <Route path="/admin/courses" component={AdminCourses}/>
    <Route path="/admin/lectures" component={Lectures}/>
    <Route path="/admin/posts" component={AdminPosts}/>
    <Route path="/admin/create-lecture" component={CreateLecture}/>
    <Route path="/admin/edit-course" component={EditCourses}/>
    <Route path="/admin/create-post" component={CreatePost}/>
    <Route path="/admin/edit-post" component={EditPost}/>
    <Route path="/admin/edit-lecture" component={EditLecture}/>
    <Route path="/admin/lecture-single" component={LectureSingle}/>
    <Route path="/course-single" component={CourseSingle}/>
    </Switch>
    </div>
</Router>
);


ReactDOM.render(app,
document.getElementById('index'));
