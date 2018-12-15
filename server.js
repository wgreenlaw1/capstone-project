//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// Required for styles.css to work
app.use(express.static("./"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log(req.body.month);
  console.log(req.body.day);
  console.log(req.body.year);

});

app.get("/employee-roster", function(req, res){
  res.sendFile(__dirname + "/employee-roster.html");
});

app.post("/employee-roster", function(req, res){
  var employeeID = parseFloat(req.body.employeeID);

  res.send("You entered " + employeeID + " as the ID.");
});

app.get("/schedule-builder", function(req, res){
  res.sendFile(__dirname + "/schedule-builder.html");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
