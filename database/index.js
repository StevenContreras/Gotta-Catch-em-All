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

module.exports = {
  getAllPokemon
};