const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        trim:true,
    },
    lastName :{
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type:String,
        required:true,
        trim:true,
    },
    password: {
        type:String,
        required:true,
        select : false,
        
    },
    accountType: {
        type:String,
        enum:["Admin", "Student", "Instructor"],
        required:true    
    },
    additionalDetails: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    courses: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    image:{
        type:String,
        required:true,
    },
    token :{
        type:String,
    },
    resetPasswordExpires: {
        type:Date,
    },
    courseProgress: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress",
        }
    ],
    // Array to store device tokens
    deviceTokens : {

        type : [String],
        default : []

    },
    
    // Field to store whether the user has an active session
    activeSession: {
        type: Boolean,
        default: false
    },

    activeDeviceIP : {

        type: String,
        
    } ,

    lastLogin : {

        type : Date,
        
    }
    
    
        
});

module.exports = mongoose.model("User", userSchema);
