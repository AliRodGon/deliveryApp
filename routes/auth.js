const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")

router.get("/", (req,res)=>{
    res.send("HEY this is AUTH route")
})

//REGISTER
router.post("/register", async (req, res)=>{
    try {
        //this encrypts the user password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt)
        
        //this creates the new user
        const newUser=new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashedpassword
        });

        //this saves the new user in tha database
        const user = await newUser.save();
        res.status(200).json(user)

    }catch(err){
        console.log(err)
    }
});

// LOGIN
router.post("/login", async (req,res)=>{
    try { 
        //res is 200. (by default) as long as none of the previous steps results in an error.        
        const existentUser = await User.findOne({email: req.body.email})
        if(!existentUser) 
        {res.status(404).json("No hemos encontrado tu usuario, prueba a registrarte")} 

        const correctPassword = await bcrypt.compare(req.body.password, existentUser.password)
        if(!correctPassword) 
        {res.status(403).json("La contraseña que has introducido no es correcta")    
        }
        
        res.status(200).json ("Bienvenido") 

    }catch(err){
        console.log(err)
    }
})





module.exports = router