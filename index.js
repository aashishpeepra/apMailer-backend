require("dotenv").config();
const express = require("express");
const server = express();
const userRoutes = require("./routes/user.routes");
const mailRoutes = require("./routes/mail.routes");
const cors = require("cors");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


  
server.use(cors())
server.use("/api/user",userRoutes)
server.use("/api/mail",mailRoutes)
server.use("/",(req,res,next)=>{
    res.status(201).json({
        message:"Listening at "+PORT
    })
})

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("connected to database");
    server.listen(PORT);
})
.catch(err=>{
    console.error("While connecting to mongoDB",err)
});