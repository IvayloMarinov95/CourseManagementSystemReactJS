const express = require('express');
const router = express.Router();

//Course Model
const Course = require('../../models/Course');

// @route GET api/courses
//@desc get All Courses
//@access Public
router.get('/', (req, res) => {
    Course.find()
    .sort({date: -1})
    .then(courses => res.json(courses))
});

// @route GET api/courses
//@desc get Single Course
//@access Public
router.get('/:id', (req, res) => {
    Course.findById(req.params.id)
    .then(course => res.json(course))
});

// @route POST api/courses
//@desc Create a Course
//@access Public
router.post('/', (req, res) => {
    const newCourse = new Course({
        name: req.body.name,
    });
    newCourse.save().then(course => res.json(course));
});

// @route PUT api/courses
//@desc Update a Course
//@access Public
router.put('/:id', (req, res) => {
    const newCourse = Course.findByIdAndUpdate(req.params.id, {
        name:  req.body.name
    });
    newCourse.update().then(course => res.json(course))
});

// @route DELETE api/items/:id
//@desc Delete a Course
//@access Public
router.delete('/:id', (req, res) => {
    Course.findById(req.params.id)
    .then(course => course.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
 });
 
 
 module.exports = router;