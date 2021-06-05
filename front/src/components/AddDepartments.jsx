const {useState} = require('react')
const {handleChange, handleSubmit} = require('../helpers/handle')

export default function AddDepartments (props) {
  const {addDep, setAddDep, setDepartments} = props

  const submit = (e) => {
    e.preventDefault()
    handleSubmit('post', e, props.apiURL, '/departments', addDep)
      .then(res => setDepartments(prev => {return [...prev, res.data]}))
  }
  return (
    <>
      <h2>Add Departments</h2>
      <form onSubmit={e => submit(e)}>
        <label htmlFor="depName">Department Name</label>
        <input type="text" name="depName" id="depName" value={addDep.dep} onChange={e => handleChange(e, setAddDep, 'dep')}/>
        <input type="submit" value='Submit' />
      </form>
    </>
  )
}