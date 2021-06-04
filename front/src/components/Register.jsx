const axios = require('axios')
const {useState} = require('react')

export default function Register (props) {
  const [form, setForm] = useState({
    email: '',
    fname: '',
    lname: ''
  })
  const handleChange = (event, type) => {
    setForm(prev => {return {...prev, [type]: event.target.value}})
    return form
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(props.apiURL + '/register', form).then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' name='email' value={form.email} onChange={(e) => handleChange(e, 'email')}  />
        <label htmlFor="fname">First Name:</label>
        <input type="text" id='fname' name='fname' value={form.fname} onChange={(e) => handleChange(e, 'fname')} />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id='lname' name='lname' value={form.lname} onChange={(e) => handleChange(e, 'lname')} />
        <input type='submit' value='Submit'/>
      </form>
    </>
  )
}
