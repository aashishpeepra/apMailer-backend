const mail = require("../models/mail");
const HttpError = require("../models/http-error");
const user = require("../models/user");
const mongoose = require("mongoose")
const {sendEmail} = require("../send-mail");

exports.send_mail = async (req,res,next)=>{
    // post request with email data
    const {to,from,subject,body,id} = req.body;
    let findUser = false;
    try{
        findUser = await user.findById(id);
    }
    catch(err){
        return next(new HttpError("Something went wrong",500))
    }
    if(!findUser)
    {
        return next(new HttpError("Can't find user with this id",400))
    }
    // reaches here if the user exists with id
    if(findUser.email !== from)
    {
        console.log("Unauthenticated attempt by ",findUser.email)
        return next(new HttpError("Unauthenticated action",400))
    }
    sendEmail(from,to,subject,body);
    // reaches here if everything is fine
    const newMail = new mail({
        from,
        to,
        body,
        subject,
        time: Date.now(),
        owner:findUser.id
    })

    // starting session
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await newMail.save({session});
        findUser.mails.push(newMail);
        await findUser.save({session});
        await session.commitTransaction();
    }
    catch(err){
        return next(new HttpError("Can't send the mail"),500)
    }

    // reaches here if session commited
    res.status(201).json({
        message:"Successfully sent the mail",
        to,
        from,
        id:newMail.id
    })
}