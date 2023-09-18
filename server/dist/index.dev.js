"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());
app.listen(3003, function () {
  console.log('server is running on port 3003');
});