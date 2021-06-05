const {useState} = require('react')
const {handleChange, handleSubmit} = require('../helpers/handle')

export default function AddDepartments (props) {
  const [addDep, setAddDep] = useState({dep: ''})

  return (
    <>
      <h2>Add Departments</h2>
      <form onSubmit={e => handleSubmit('post', e, props.apiURL, '/departments', addDep)}>
        <label htmlFor="depName">Department Name</label>
        <input type="text" name="depName" id="depName" value={addDep.dep} onChange={e => handleChange(e, setAddDep, 'dep')}/>
        <input type="submit" value='Submit' />
      </form>
    </>
  )
}