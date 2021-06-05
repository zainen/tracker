const {useState} = require('react')
const {handleSubmit, handleChange} = require('../helpers/handle')

export default function Register (props) {
  const { form, setForm } = props
  return (
    <>
      <form onSubmit={e => handleSubmit('post', e, props.apiURL, '/register', form)}>
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' name='email' value={form.email} onChange={(e) => handleChange(e,setForm, 'email')}  />
        <label htmlFor="fname">First Name:</label>
        <input type="text" id='fname' name='fname' value={form.fname} onChange={(e) => handleChange(e,setForm, 'fname')} />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id='lname' name='lname' value={form.lname} onChange={(e) => handleChange(e,setForm, 'lname')} />
        <input type='submit' value='Submit'/>
      </form>
    </>
  )
}
