var express = require('express');
var app = express();
var bodyParser = require('body-parser');  // To convert into JSON
app.use(express.bodyParser());

var model = require('./model');

// Routes
app.get('/api/classroom', function(req, res) {
  model.getClassrooms().then(function(classes) {
    return res.send(classes);
  }).catch(function(err) {
    console.log(err);
    return res.send(400);
  });
});

// This will be used to create *and* update classes
app.post('/api/classroom', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000);
