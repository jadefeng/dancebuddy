var config = require('./config');

var mysql = require('mysql')
var pool  = mysql.createPool(config.DB);
var Q = require('q');

function justRows(data) {
  return data[0];
}

exports.getClassrooms = function getClassrooms() {
  return Q.ninvoke(pool, 'query', "SELECT * FROM studio_class").then(justRows);
};

exports.getClassroomEntry = function getClassroomEntry(id) {
  return Q.ninvoke(pool, 'query', "SELECT * FROM studio_class id = ?", id).then(justRows);
};

// TODO - JEEVA - test that this is not vulnerable to sql injection
exports.addClassroomEntry = function addClassroomEntry(data) {
  console.log("hello", data);
  return Q.ninvoke(pool, 'query', 'INSERT INTO studio_class SET ?', data ) //.then(justRows);
};
