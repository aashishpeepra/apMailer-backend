const mailgun = require("./utils/mailgun-config");

const sendEmail = (from = process.env.MAILGUN_FROM,to,subject,data)=>{
    const emailData = {
        from:from,
        to:to,
        subject:subject,
        html:data
    }
    mailgun.messages().send(emailData,(error,body)=>{
        if(error)
        {
            console.error(error);
            return;
        }
        console.log("Successfully sent mail to ",to);
    })
}

exports.sendEmail = sendEmail;
