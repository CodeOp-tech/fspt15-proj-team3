let nodemailer = require('nodemailer');
let cron = require('node-cron');
let HTML_TEMPLATE = require("./email-template")
require("dotenv").config();

const SECRET = process.env.SECRET;

const message = "Time to take a break!"

//Stop works when running Node.js but not index.js

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
      pass: SECRET
    }
});

//changed to 10 to test something
const reminderEveryFiveMin = cron.schedule('*/10 * * * *', () => {
      transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent every 10 min:' + info.response);
            }
        });
      });

//reminderEveryFiveMin.start()
reminderEveryFiveMin.stop()
//reminderEveryFiveMin.destroy()
//reminder.destroy()

module.exports = reminderEveryFiveMin;
 