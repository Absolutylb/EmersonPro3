const mysql = require('mysql2/promise');

const db = mysql.createPool({
host: 'localhost',
user: 'root',
password: 'Sen@iDev77!.',
database: 'nome_do_banco'
});

module.exports = db;
