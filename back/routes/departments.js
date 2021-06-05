const router = require('express').Router()

const departments = (db) => {
  router.post('/departments', (request, response) => {
    const department = [request.body.dep]
    db.query(`INSERT INTO departments (name)
    VALUES ($1)
    RETURNING *`, department).then(res => {
      console.log(res.rows[0])
      response.json(res.rows[0])
    })
  })
  router.post('/remove-department', (request, response) => {
    const {id} = request.body
    db.query(`DELETE FROM departments
    WHERE id = $1`, [id]).then(res => {
      console.log('done')
    }).catch(e => console.log(e))
    console.log(request.body)
  })
  router.get('/departments', (request, response) => {
    db.query(`SELECT * FROM Departments`).then(res => {
      response.json(res.rows)
    })
  })

  return router
}

module.exports = departments