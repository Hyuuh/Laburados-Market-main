const mongoose = require('mongoose');
const database = require('../mongodb/db.mongodb');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { append } = require('express/lib/response');


const saltRounds = 10;

const usersSchema = new mongoose.Schema({
    usuario: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});


usersSchema.pre('save', function(next){
if(this.isNew || this.isModified('password')){
    const document = this
    bcrypt.hash(document.password, saltRounds, (err, hashedPassword)=>{
        if(err){
            next(err);
        }else{
            document.password = hashedPassword;
            next();
        }
    });
}else{
    next();
}
});

usersSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same)
        }
    });

}

module.exports = mongoose.model('usuarios', usersSchema)



