var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require('cors'); 

var apiRouter = require("./routes/api");
var indexRouter = require("./routes/index");
var app = express();
app.use(cors()); 


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api", apiRouter);
  

module.exports = app;
