import nodemailer from "nodemailer";
import cron from "node-cron"
import schedule from "node-schedule"

let mailOptions = {
    from: 'melecouvreur@gmail.com',
    to: 'melecouvreur@gmail.com',
    subject: 'Email from Node-App: A Test Message!',
    text: 'Some content to send'
};

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'melecouvreur@gmail.com',
      pass: 'ldhmabrehybxyokb'
    }
});

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});


/*
const SENDMAIL = async (mailDetails, callback) => {
    try {
      const info = await transporter.sendMail(mailDetails)
      callback(info);
    } catch (error) {
      console.log(error);
    } 
  };
*/

cron.schedule('*/3 * * * *', () => {
    transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
      });
    });


//const SCHEDULE = schedule.scheduleJob("*/5 * * * *", async () =>  {
//SENDMAIL})


//export default SENDMAIL;