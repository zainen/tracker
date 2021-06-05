const axios = require('axios')

export default function EachDep (props) {
  const {id, name, apiURL, remove} = props

  const deleteDep = (id) => {
    return axios.post(apiURL + '/remove-department', {id: id}).then(res => {
      console.log(res)
    })
  }
  return (
    <>
      <h4>{name}</h4>
      <button onClick={() => deleteDep(id)}>Delete</button>
    </>
  )
}