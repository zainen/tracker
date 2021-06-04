const router = require('express').Router()

const register = (db) => {
  router.get('/register', (request, response) => {
    console.log(request)
    response.send('register')
  })
  router.post('/register', (request, response) => {
    console.log(request.body)
    response.send('post-register')
  })
  return router
}
module.exports = register