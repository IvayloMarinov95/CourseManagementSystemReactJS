const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    name: {type:String, required: true},
    body: {type:String, required: true},
    date: {type: Date, default: Date}
});

module.exports = Post = mongoose.model('posts', PostSchema);