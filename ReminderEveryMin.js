let nodemailer = require('nodemailer');
let cron = require('node-cron');
let HTML_TEMPLATE = require("./email-template")

const message = "Time to take a break!"

//Works when running Node.js & Routes in Index.js

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
      pass: 'ldhmabrehybxyokb'
    }
});

/*
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('One off Email sent:' + info.response);
    }
});
*/
const reminderEveryMin = cron.schedule('* * * * *', () => {
    transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent every min:' + info.response);
          }
      });
    });

//reminderEveryMin.start()
reminderEveryMin.stop()
//reminder.destroy()

module.exports = reminderEveryMin