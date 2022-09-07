const router = require("express").Router()
const User = require("../models/User")

// router.get("/", (req,res)=>{
//     res.send("HEY this is USERS route")
// })


//get all Users
router.get ("/", async (req,res)=>{
    const allUsers = await User.find()
    res.status(200).json(allUsers)
})



module.exports = router