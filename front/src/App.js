import './App.css';

import Register from './components/Register'
import AddDepartments from './components/AddDepartments'
const {useState, useEffect} = require('react')
const axios = require('axios')


const apiURL = 'http://localhost:8000/api'
function App() {
  const [departments, setDepartments] = useState([])
  useEffect(() => {
    Promise.all([
      axios.get(apiURL + '/departments')
    ]).then(([all]) => {
      setDepartments(all.data)
    }).catch(e => console.log(e))
  }, [])
  console.log(departments)

  return (
    <div className="App">
      <Register apiURL={apiURL}/>
      <AddDepartments apiURL={apiURL}/>
    </div>
  );
}

export default App;
