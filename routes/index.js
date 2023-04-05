var express = require('express');
//var reminderEveryMin = require("../ReminderEveryMin")
var router = express.Router();
let nodemailer = require('nodemailer');
let cron = require('node-cron');
const db = require("../model/helper");
require("dotenv").config();
let HTML_TEMPLATE = require("../email-template")
var cors = require('cors')

const EM_PASS = process.env.EM_PASS;
const message = "Time to take a break!"

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


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express' });
});

//Reminders each Min - START  
router.post('/reminders-start', async (req, res) => {
  await reminderEveryMin.start();
  return res.json({ message: 'Started' });
});

//Reminders each Min - STOP 
router.post('/reminders-stop', async (req, res) => {
  await reminderEveryMin.stop();
  return res.json({ message: 'Stopped' });
});

//Test route to see if is connectin to db  
router.get('/test', async (res) => {
  try {
    const result = await db(`SELECT * FROM users;`)
    //console.log(result.data)
    res.status(200).send(result.data)
  }
    catch(err){
    res.status(400).send({error: err.message});
    }
  })

//Reminders each Min for logged in user - START  
router.post('/test-start', async (req, res) => {
  const {id} = req.body
  try {
    let sql = `SELECT email FROM users WHERE id = 1;`
    let result = await db(sql)
    console.log(result.data)
    res.status(200).send(result.data)
  }
    /*
     const reminder = cron.schedule('* * * * *', () => {
      transporter.sendMail({
        from: 'melecouvreur@gmail.com',
        to: `${result.data}`,
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
      await reminder.start()
      res.status(200).send({message: "email sent"})
    };
    */
    catch(err){
    res.status(400).send({error: err.message});
    }
  })


module.exports = router;
