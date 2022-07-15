const router = require("express").Router()

router.get("/", (req,res)=>{
    res.send("this is USERS route")
})



module.exports = router