const mongoose = require("mongoose")


const DishSchema = new mongoose.Schema({
    dishname: {
        type:String,
        required:true,
        min:3,
        max:200,
        unique:true
    },
    course: {
        type:String,
        required:true,
        min:3
    },
   ingredients: {
        type:Array,
        default: []
    },
   liked: {
        type:Array,
        default: []
   }
});

module.exports = mongoose.model("Dish", DishSchema)