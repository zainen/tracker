const {Pool} = require('pg')

require('dotenv').config()
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT, DB_MAX, DB_IDLETIMEOUT, DB_CONNECTIONTIMEOUT} = process.env


const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  max: DB_MAX,
  idleTimeoutMillis: DB_IDLETIMEOUT,
  connectionTimeoutMillis: DB_CONNECTIONTIMEOUT
})

pool
  .connect()
  .catch(err => {
    throw err
  })

module.exports = pool
