const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const courses = require('./routes/api/courses');
const posts = require('./routes/api/posts');
const lectures = require('./routes/api/lectures');



const app = express();


//bodyparser Middleware
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
require('./passport')(passport);

// DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect("mongodb://localhost:27017/cms")
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/uploads', express.static('uploads'));
    
// Use Routes
app.use('/api/users', users);
app.use('/api/courses', courses);
app.use('/api/posts', posts);
app.use('/api/lectures', lectures);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));