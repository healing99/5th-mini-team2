const mysql = require('mysql2');
const config = require('./db_info')[process.env.DB_INFO];

const info = () => {
  return {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
    dateStrings: 'date',
    connectionLimit: 4
  }
}

const createCon = () => {
  const con = mysql.createConnection(info());
  return con;
}

const createPool = () => {
  const pool = mysql.createPool(info());
  return pool;
}

module.exports = {
  info,
  createCon,
  createPool
}