const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name: {type: String, required: true },
    email: {type: String,
        unique: true,
        required: 'Email address is required',
    },
    password: {type: String, required: true},
    date: {type: Date, default: Date}
});



module.exports = User = mongoose.model('users', UserSchema);