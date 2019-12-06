const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

db.connect((err) => {
  if (err) {
    console.error("Not Connected to Database")
  } else {
    console.log("Connected to Database!")
  }
})

const response = (err, result, callback) => {
  if (err) {
    callback(err);
  } else {
    callback(null, result);
  }
};

const getAllPokemon = function(callback) {
  db.query(`SELECT * FROM team`, (err, result) => 
    response(err, result, callback)
  );
};

const capture = function(obj, callback) {
  var query = `INSERT INTO team (nombre, numero, tipo, amount, img) VALUES("${obj.name}", ${obj.id}, "${obj.type}", 1, "${obj.img}") ON DUPLICATE KEY UPDATE amount = amount + 1`;
  db.query(query, (err) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, 'Updated!');
    }
  })
}

module.exports = {
  getAllPokemon,
  capture
};