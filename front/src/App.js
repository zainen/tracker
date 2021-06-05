import './App.css';

import Register from './components/Register'
import AddDepartments from './components/AddDepartments'

import States from './helpers/states'
import Departments from './components/Departments';


const {useEffect} = require('react')
const axios = require('axios')


const apiURL = 'http://localhost:8000/api'
function App() {
  const {form, setForm, departments, setDepartments, addDep, setAddDep} = States()
  useEffect(() => {
    Promise.all([
      axios.get(apiURL + '/departments')
    ]).then(([all]) => {
      setDepartments(all.data)
    }).catch(e => console.log(e))
  }, [])

  return (
    <div className="App">
      <Register apiURL={apiURL} form={form} setForm={setForm}/>
      <AddDepartments apiURL={apiURL} addDep={addDep} setAddDep={setAddDep} setDepartments={setDepartments} />
      <Departments departments={departments} setDepartments={setDepartments} apiURL={apiURL} />
    </div>
  );
}

export default App;
