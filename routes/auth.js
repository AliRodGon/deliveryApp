const router = require("express").Router();
const User = require("../models/User");



//REGISTER
router.post("/register", (req,res)=>{
    const user = new User({
        username: "Ali",
        email: "alirod@dot.com",
        password:"123456"
    })
    user.save();
})


module.exports = router