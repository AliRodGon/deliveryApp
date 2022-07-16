const router = require("express").Router()
const Dish = require("../models/Dishes");

 router.get("/", (req,res)=>{
     res.send("HEY this is DISHES route")
 })

// Create new dish
router.post("/", async (req,res)=>{
        try {
            console.log(dish)
                const newDish=new Dish ({
                        dishname: req.body.dishname,
                        course: req.body.course
                      
                       })
            
                    const dish = await newDish.save();
                    console.log(dish)
                    res.status(200).json(dish)
            
                } catch(err) {
                        console.log(err)
                    }
                });

            

module.exports = router