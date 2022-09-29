const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createAt: String
})



const User = model('User', userSchema);

module.exports = User;