const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')                                                                                                                                                 


//Create Schema
const UserSchema = new Schema({
    name: {type: String, required: true },
    email: {type: String,
        unique: true,
        required: 'Email address is required',
        unique: true,
    },
    password: {type: String, required: true},
    date: {type: Date, default: Date}
});

UserSchema.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10);                                                                                                                                  
        this.password  = bcrypt.hashSync(this.password, salt);
    }                                                                                                                                                                     
    next()                                                                                                                                                                     
})        



module.exports = User = mongoose.model('users', UserSchema);