const mongoose = require ("mongoose");
// const { string } = require("optimist");
const studentSchema= new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
    
});
module.exports = mongoose.model("student",studentSchema)