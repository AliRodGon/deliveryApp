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

//Modify dish
router.put("/:id", async (req,res)=>{
    try {
        const UpdatedDish = await Dish.findByIdAndUpdate(req.params.id, {$set:req.body})
        res.status(200).json(UpdatedDish)

    }catch(err) {
        console.log(err);
    }
})

//get all dishes
router.get("/", async (req,res)=>{
    const allDishes = await Dish.find()
    res.status(200).json(allDishes)

})            

//like a dish
// router.put("/:id/liked", async (req,res)=>{
//     const dish = await Dish.findById(req.params.id); //primero le llega el id del Dish por params (id en la url)
//         console.log(dish)


// })




module.exports = router