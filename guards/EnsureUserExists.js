const db = require("../model/helper");
require("dotenv").config();

async function ensureUserExists(req, res, next) {
  try {
      let results = await db(`SELECT * FROM users WHERE id = ${req.params.id}`);
      if (results.data.length === 1) {
          //user was found; save user.id in response obj for the route function to use
          res.locals.user = results.data[0].id;
          //let user = JSON.stringify(res.locals.user)
          //res.send({message: `${user}`})
          //Let next middleware function run
          next();
      } else {
          res.status(404).send({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
  }
}
 
module.exports = ensureUserExists;
