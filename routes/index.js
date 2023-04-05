var express = require('express');
var reminderEveryMin = require("../ReminderEveryMin")
var reminderEveryFiveMin = require("../ReminderEveryFiveMin")
//const fetch = require("node-fetch");
var router = express.Router();
var cors = require('cors')

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

//Reminders each 5 Min - START
router.post('/reminders-five-start', async (req, res) => {
  await reminderEveryFiveMin.start();
  return res.json({ message: 'Every 5 min reminder Started' });
});

//Reminders each 5 Min - STOP
router.post('/reminders-five-stop', async (req, res) => {
  await reminderEveryFiveMin.stop();
  return res.json({ message: 'Every 5 min reminder Stopped' });
});

module.exports = router;
