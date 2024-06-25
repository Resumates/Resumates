const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    userId : { type:String, required: true}, // type  string , required: true 필수 항목
    email:  { type:String, required: true}, 
    userPw:  { type:String, required: true},
},
{collection: "users"}); //collection 이름

const User = mongoose.model("User", userSchema);

module.exports = {User}; 



