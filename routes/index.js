var express = require('express');
var reminder = require("../reminders")
var reminderEveryFiveMin = require("../reminders")

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

router.post('/five-start', async (req, res) => {
  await reminderEveryFiveMin.start();
  return res.json({ message: 'Every 5 min reminder Started' });
});

module.exports = router;
