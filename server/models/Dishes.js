const mongoose = require("mongoose")


const DishSchema = new mongoose.Schema({
    dishname: {
        type:String,
        required:true,
        unique:true
    },
    category: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
    },
    img: {
         type:String,
         default:""
    },
    liked: {
        type:Array,
        default: []
   }
});

module.exports = mongoose.model("Dish", DishSchema)