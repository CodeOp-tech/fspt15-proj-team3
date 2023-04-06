var express = require('express');
var router = express.Router();
let nodemailer = require('nodemailer');
//var reminderEveryMin = require("../ReminderEveryMin")
let cron = require('node-cron');
const db = require("../model/helper");
require("dotenv").config();
let HTML_TEMPLATE = require("../email-template")
var cors = require('cors')
var ensureUserLoggedIn = require("../EnsureUserLoggedIn")
var ensureUserExists = require("../EnsureUserExists")

const EM_PASS = process.env.EM_PASS; // this is the app password key to use my google account as "sender"
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
  reminderEveryMin.start();
  return res.json({ message: 'Started' });
});

//Reminders each Min - STOP 
router.post('/reminders-stop', async (req, res) => {
  reminderEveryMin.stop();
  return res.json({ message: 'Stopped' });
});

//Private route for logged in users only. For testing purposes.
router.get("/private", ensureUserLoggedIn, (req, res) => {
  let id = req.user_id
  res.status(200).send({
    message: "here is your protected data " , id })
})

//START Reminders
router.post('/test-start', ensureUserLoggedIn, async (req, res, next) => {
  let id = req.user_id
  //let id = res.locals.user 
  console.log(id)
  try {
    let sql = `SELECT email FROM users WHERE id =${id};`
    let result = await db(sql)
    console.log(result.data[0].email)
    
    const reminder = cron.schedule('* * * * *', () => {
      transporter.sendMail({
        from: 'melecouvreur@gmail.com',
        to: `${result.data[0].email}`,
        subject: 'Hello - Break Reminder!',
        text: message,
        html: HTML_TEMPLATE(message),
        }, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Started reminder email to:' + info.response)
            }
        });
      }).start()
      res.status(200).send("success")
    }
    catch(err){
    res.status(400).send({error: err.message});
    }
  })

//STOP Reminders
router.post('/test-stop', ensureUserLoggedIn, async (req, res, next) => {
  let id = req.user_id
  //let id = res.locals.user 
  console.log(id)
  try {
    let sql = `SELECT email FROM users WHERE id = ${id};`
    let result = await db(sql)
    console.log(result.data[0].email)
    const reminder = cron.schedule('* * * * *', () => {
      transporter.sendMail({
        from: 'melecouvreur@gmail.com',
        to: `${result.data[0].email}`,
        subject: 'Hello - Break Reminder!',
        text: message,
        html: HTML_TEMPLATE(message),
        }, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log(`Stopped reminder email to` + result.data[0].email)
            }
        });
      }).stop()

      res.status(200).send("success")
    }
    catch(err){
    res.status(400).send({error: err.message});
    }
  })

//Reminders each Min for registered/logged-in user - START  
router.post('/reminders-start/:id', async (req, res, next) => {
  let id = req.params.id
  //let id = res.locals.user 
  //console.log(id)
  try {
    let sql = `SELECT email FROM users WHERE id = ${id};`
    let result = await db(sql)
    console.log(result.data[0].email)
    const reminder = cron.schedule('* * * * *', () => {
      transporter.sendMail({
        from: 'melecouvreur@gmail.com',
        to: `${result.data[0].email}`,
        subject: 'Hello - Break Reminder!',
        text: message,
        html: HTML_TEMPLATE(message),
        }, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Reminder email sent every min:' + info.response)
            }
        });
      }).start()

      res.status(200).send({message:`reminder to ${result.data[0].email} started`})
    }
    catch(err){
    res.status(400).send({error: err.message});
    }
  })

//Reminders each Min for registered/logged-in user - START  
router.post('/reminders-stop/:id', async (req, res, next) => {
  let id = req.params.id
  //let id = res.locals.user 
  //console.log(id)
  try {
    let sql = `SELECT email FROM users WHERE id = ${id};`
    let result = await db(sql)
    console.log(result.data[0].email)
    const reminder = cron.schedule('* * * * *', () => {
      transporter.sendMail({
        from: 'melecouvreur@gmail.com',
        to: `${result.data[0].email}`,
        subject: 'Hello - Break Reminder!',
        text: message,
        html: HTML_TEMPLATE(message),
        }, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Reminder email sent every min:' + info.response)
            }
        });
      }).stop()

      res.status(200).send({message: `reminder to ${result.data[0].email} stopped`})
    }
    catch(err){
    res.status(400).send({error: err.message});
    }
  })


module.exports = router;
