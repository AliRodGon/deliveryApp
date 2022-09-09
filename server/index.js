const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const dishRoute = require("./routes/dishes")

dotenv.config()

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/dishes", dishRoute)




app.listen(5000, ()=>{
    console.log("server running ok in port 5000")
})