const mysql = require('mysql2')

var pool = mysql.createPool({
  //connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee',
  // timezone: 'Z',
  // debug: false,
  /*
  ssl: {
    ca: fs.readFileSync(__dirname + '/certs/ca.pem'),
    key: fs.readFileSync(__dirname + '/certs/client-key.pem'),
    cert: fs.readFileSync(__dirname + '/certs/client-cert.pem')
  }
  */
});
module.exports = pool;