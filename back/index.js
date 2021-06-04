require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

const read = require('./helpers/reader')
const path = require('path')


const db = require('./db')

app.get('/api/debug/reset',  (request, response) => {
  const setup = read(path.resolve(__dirname, './db/schema.sql'))
  db.query(setup).then(res => {
    response.send('db reset')

  }).catch(err => {throw console.log(err)})
})

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})