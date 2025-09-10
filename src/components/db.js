const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'TU_HOST',
  user: '',
  password: 'TU_PASSWORD',
  database: 'bancrece_canaldedenuncias',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;
