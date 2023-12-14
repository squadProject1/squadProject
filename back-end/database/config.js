const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Faouzia Chebbi1',
  database : 'mydb'
});


module.exports = connection;