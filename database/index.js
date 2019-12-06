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

const getAllPokemon = function(un, callback) {
  db.query(`CREATE TABLE IF NOT EXISTS ${un} (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(20) NOT NULL UNIQUE,
    numero int NOT NULL,
    tipo varchar(20) NOT NULL,
    amount int NOT NULL,
    img varchar(300),
    PRIMARY KEY (ID)
    );`, (err) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        db.query(`SELECT * FROM ${un};`, (err, result) => 
        response(err, result, callback)
        );
      }
    }
  );
};

const capture = function(un, obj, callback) {
  var query = `INSERT INTO ${un} (nombre, numero, tipo, amount, img) VALUES("${obj.name}", ${obj.id}, "${obj.type}", 1, "${obj.img}") ON DUPLICATE KEY UPDATE amount = amount + 1`;
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