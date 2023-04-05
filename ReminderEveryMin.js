let nodemailer = require('nodemailer');
let cron = require('node-cron');
require("dotenv").config();

//Moved this into index.js as I want to fetch email from db and insert into mailOptions
let HTML_TEMPLATE = require("./email-template")
const EM_PASS = process.env.EM_PASS;
const message = "Time to take a break!"

//Moved this directy as an object into reminderEveryMin so I can insert email later
let mailOptions = {
    from: 'melecouvreur@gmail.com',
    to: 'melecouvreur@gmail.com',
    subject: 'Email from BreakTime: Break Reminder!',
    text: message,
    html: HTML_TEMPLATE(message),
};

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'melecouvreur@gmail.com',
      pass: EM_PASS
    }
}); 

const reminderEveryMin = cron.schedule('* * * * *', () => {
    transporter.sendMail({
      from: 'melecouvreur@gmail.com',
      to: 'melecouvreur@gmail.com',
      subject: 'Hello - Break Reminder!',
      text: message,
      html: HTML_TEMPLATE(message),
  }, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Reminder email sent every min:' + info.response);
          }
      });
    });

//reminderEveryMin.start()
//reminderEveryMin.stop()

module.exports = reminderEveryMin
