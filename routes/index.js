var express = require('express');
var reminderEveryMin = require("../ReminderEveryMin")
var reminderEveryFiveMin = require("../ReminderEveryFiveMin")

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express' });
});

//Reminders each Min - START - stopped working 
router.post('/reminders-start', async (req, res) => {
  await reminderEveryMin.start();
  return res.json({ message: 'Started' });
});

//Reminders each Min - STOP - stopped working
router.post('/reminders-stop', async (req, res) => {
  await reminderEveryMin.stop();
  return res.json({ message: 'Stopped' });
});

//Reminders each 5 Min - START - not working
router.post('/reminders-five-start', async (req, res) => {
  await reminderEveryFiveMin.start();
  return res.json({ message: 'Every 5 min reminder Started' });
});

module.exports = router;
