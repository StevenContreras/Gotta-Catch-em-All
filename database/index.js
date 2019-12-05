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
