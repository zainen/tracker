const router = require('express').Router()

const departments = (db) => {
  router.post('/departments', (request, response) => {
    const department = [request.body.dep]
    db.query(`INSERT INTO departments (name)
    VALUES ($1)
    RETURNING *`, department).then(res => {
      console.log(res.rows)
    })
  })
  router.get('/departments', (request, response) => {
    db.query(`SELECT * FROM Departments`).then(res => {
      response.json(res.rows)
    })
  })

  return router
}

module.exports = departments