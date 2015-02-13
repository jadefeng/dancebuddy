var express = require('express');
var app = express();
var bodyParser = require('body-parser');  // To convert into JSON
app.use(express.bodyParser());

// Routes
app.get('/api/classroom', function(req, res) {
  res.send([{id: 1, name: "jade's class", secret: 'abc123'}, {id: 2, name: "Jeeva's class", secret: "123abc"}]);
});

// This will be used to create *and* update classes
app.post('/api/classroom', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000);
