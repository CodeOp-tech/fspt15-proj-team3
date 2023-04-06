var jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

function ensureUserLoggedIn(req, res, next) {
  // Get token from the "authorization" header with format "Bearer <token>"
  let authHeader = req.headers["authorization"];
  // Separate 'Bearer' and token to keep only the token
  let [str, token] = authHeader.split(" ");
  try {
    // Throws error on invalid/missing token
    // remember, payload includes the user_id we added to it when we created the token
    let payload = jwt.verify(token, supersecret);
    //everything is awesome!
    //get from the payload the user_id and store in the req so we can use later
    req.user_id = payload.user_id;
    console.log(req.user_id)
    next();
  } catch (err) {
    res.status(401).send({ error: "Unauthorized" });
  }
}

module.exports = ensureUserLoggedIn;