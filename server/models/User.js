const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email: {
        type:String,
        required:true,
        min:3,
        unique:true
    },
    password: {
        type:String,
        required:true,
        min:6
    },
   profileImage: {
        type:String,
        default: ""
    },
   favorites: {
        type:Array,
        default: []
    },
   lastOrder: {
        type:Array,
        default: []
   },
   isAdmin: {
        type:Boolean,
        default:false
   },
},
{ timestamps:true}
);

module.exports = mongoose.model("User", UserSchema)