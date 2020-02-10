const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'adritk',
    password : 'sundakelapa1',
    database : 'tokokasih',
    port     : 3306
  });
  
  module.exports = connection