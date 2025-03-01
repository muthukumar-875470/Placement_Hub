const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    mobilenumber: Number,
    alternativenumber: Number,
    dateofbirth: String,
    email: String,
    gender: String,
    collegename: String,
    github: String,
    linkedin: String,
    degree: String,
    course: String,
    cgpa: Number,
    address: String,
    skills: [String],  // Store as array
    interest: String,
    language: [String],  // Store as array
});

const RegisterModel = mongoose.model("registers", RegisterSchema);
module.exports = RegisterModel;

