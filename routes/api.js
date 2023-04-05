var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken") 
const db = require("../model/helper");
var cors = require('cors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(200, { title: 'Express' });
});

//API Login

router.post("/users/register", async (req, res) =>{
  const {firstname, lastname, username, password, email} = req.body;
  const hashedPWD = await bcrypt.hash(password, saltRounds); 

  try{
    let sql = `INSERT into users (firstname, lastname, username, password, email) VALUES ("${firstname}", "${lastname}", "${username}", "${hashedPWD}", "${email}" );  `
    await db(sql);
    res.status(200).send({message: "Registered!"});
  }catch(err){
    res.status(400).send({error: err.message});
  }
})

router.post("/users/login", async (req, res) =>{
  const {username, password} = req.body;
 

  try{
    let sql = `SELECT * FROM users WHERE username ="${username}";  `;
    let result = await db(sql);
    console.log(result)
    if(result.data.length != 1) res.status(404).send({error: "Authentication failed"})
    let user = result.data[0];
    if(!user) res.status(404).send({error: "Authentication failed"})
    let doMatch = await bcrypt.compare(password, user.password);
    if(doMatch){
      const token = jwt.sign({userID: user.id}, process.env.SUPER_SECRET);
      res.status(200).send({message: "Logged in Successfull", token});
    }else{
      res.status(401).send({message:"Authentication failed"})
    }
  }catch(err){
   res.status(500).send({error: err});
  }
})

module.exports = router;
