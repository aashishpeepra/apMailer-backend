const user = require("../models/user");
const HttpError = require("../models/http-error");
const bcrypt = require("bcrypt");

exports.login = async (req,res,next)=>{
    console.log("reached")
    const {email,password} = req.body;
    let checkUser = false;
    try{
        checkUser = await user.findOne({email:email})
    }
    catch(err){
        console.log(err)
        return next(new HttpError("Something went wrong",500));
    }
    if(!checkUser)
    {
        return next(new HttpError("Can't find the user",500))
    }
    let passwordMatches = false;
    try{
        passwordMatches = await bcrypt.compare(password,checkUser.password);

    }
    catch(err){
        return next(new HttpError("Can't connect to database",500));
    }
    if(!passwordMatches)
    {
        return next(new HttpError("Invalid credentials",501));
    }
    // reaches here if the password is correct
    
    res.status(201).json({
     name:checkUser.name,
     email:checkUser.email,
     id: checkUser.id   
    })
}

exports.signup = async (req,res,next)=>{
    const {name,email,password} = req.body;
    let checkUser = false;
    try{
        checkUser = await user.findOne({email:email});
    }
    catch(err){
        return next(new HttpError("Something went wrong try again",500))
    }
    if(checkUser)
    {
        // user already exists
        return next(new HttpError("User already exists try signing in",400))
    }
    // reaches here if user doesn't exists
    let encryptedPassword = "";
    try{
        encryptedPassword = await bcrypt.hash(password,+process.env.SALT)
    }
    catch(err){
        return next(new HttpError("Something wen't wrong while creating your acount",500))
    }
    const newUser = new user({
        name:name,
        email:email,
        password:encryptedPassword,
        activity:[],
        mails:[]
    })
    try{
        await newUser.save();
    }
    catch(err){
        console.error("Can't save the user ",email,name,err);
        return next(new HttpError("Can't create an account",500))
    }
    res.status(201).json({
        name,
        email,
        id:newUser.id
    })

}
