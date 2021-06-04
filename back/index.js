require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT

const read = require('./helpers/reader')
const path = require('path')

const register = require('./routes/register')


const db = require('./db')

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

app.use('/api', register(db))


app.get('/api/debug/reset',  (request, response) => {
  const setup = read(path.resolve(__dirname, './db/schema.sql'))
  db.query(setup).then(res => {
    response.send('db reset')

  }).catch(err => {throw console.log(err)})
})

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})