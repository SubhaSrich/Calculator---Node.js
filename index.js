const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Calculator Home Page
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

//Calculator BMI Page
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html")
})
app.post("/bmicalculator", function(req, res) {
  var h = Number(req.body.h);
  var w = Number(req.body.w);
  var bmi = w / (h * h);
  res.send("BMI is " + bmi);
})
//Server Port
app.listen(3000, function() {
  // console.log("Hello World");
});