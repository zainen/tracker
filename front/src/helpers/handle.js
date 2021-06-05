const axios = require('axios')

const handleChange = (event, state, type) => {
  return state(prev => {return {...prev, [type]: event.target.value}})
}
const handleSubmit = (type, event, url, end, data) => {
  event.preventDefault()
  axios[type](url + end, data).then(res => {
  }).catch(err => console.log(err))
}

module.exports = {handleChange, handleSubmit}