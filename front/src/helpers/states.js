const {useState} = require('react')

export default function States () {
  
  
  const [departments, setDepartments] = useState([])
  
  const [form, setForm] = useState({
    email: '',
    fname: '',
    lname: ''
  })
  const [addDep, setAddDep] = useState({dep: ''})

  
  const states = {departments, setDepartments, form, setForm, addDep, setAddDep}
  return states 
}

