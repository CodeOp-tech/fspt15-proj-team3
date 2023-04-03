var express = require('express');
let nodemailer = require('nodemailer');
let cron = require('node-cron');
var reminder = require("../reminders")
let HTML_TEMPLATE = require("../email-template")

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express' });
});


router.post('/reminders-start', async (req, res) => {
  await reminder.start();
  return res.json({ message: 'Started' });
});

router.post('/reminders-stop', async (req, res) => {
  await reminder.stop();
  return res.json({ message: 'Stopped' });
});

module.exports = router;
