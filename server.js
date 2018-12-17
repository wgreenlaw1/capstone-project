//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body.month);
  console.log(req.body.day);
  console.log(req.body.year);
});

app.get("/employee-roster", function(req, res) {
  res.sendFile(__dirname + "/employee-roster.html");
});

app.post("/employee-roster", function(req, res) {

  var employeeID = parseFloat(req.body.employeeID);
  res.send("You entered " + employeeID + " as the ID.");

});

app.get("/schedule-builder", function(req, res) {
  res.sendFile(__dirname + "/schedule-builder.html");
});

app.post("/schedule-builder", function(req, res) {
  console.log(req.body.date);
  console.log(req.body.startTime);
  console.log(req.body.endTime);
  console.log(req.body.employee);
  console.log(req.body.position);
  console.log(req.body.department);

});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
