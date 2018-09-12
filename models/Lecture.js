const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const LectureSchema = new Schema({
    name: {type: String, required: true},
    course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
    myFile: {type:String, required: true}, 
    date: {type: Date, default: Date}
    
});

module.exports = Lecture = mongoose.model('lectures', LectureSchema);

// lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }],
