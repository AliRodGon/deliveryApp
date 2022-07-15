const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect("process.env.MONGO_URL", {useNewUrlParser: true}, ()=>{
    console.log("connected to mongo AGAIN, ok")
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.get("/",(req,res)=>{
    res.send("This is working, this is the main page")
})



app.listen(5000, ()=>{
    console.log("server running ok in port 5000")
})