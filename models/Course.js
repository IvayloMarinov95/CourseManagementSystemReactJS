const mongooose = require('mongoose');
const Schema = mongooose.Schema;

//Create Schema
const CourseSchema = new Schema({
    name: { type:String, required: true },
    date: {type: Date, default: Date}
});

module.exports = Course = mongooose.model('courses', CourseSchema);