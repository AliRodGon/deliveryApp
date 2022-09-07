const router = require("express").Router()
const Dish = require("../models/Dishes");

//  router.get("/", (req,res)=>{
//      res.send("HEY this is DISHES route")
//  })

// Create new dish
router.post("/newdish", async (req,res)=>{
        try {
                const newDish=new Dish ({
                        dishname: req.body.dishname,
                        category: req.body.category,
                        price: req.body.price,
                        img: req.body.img,
                       })
           
                    const dish = await newDish.save();
                    res.status(200).json(dish)
                } catch(err) {
                        console.log(err)
                    }
                });

//get all dishes
router.get("/", async (req,res)=>{
    const allDishes = await Dish.find()
    res.status(200).json(allDishes)

})            

router.get("/bebidas", async (req,res)=>{
    const bebidas = await Dish.find({category: "bebidas"})
    res.status(200).json(bebidas)
})

module.exports = router