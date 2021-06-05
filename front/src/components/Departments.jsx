
import EachDep from './EachDep'



export default function Departments (props) {
  const {departments, setDepartments, apiURL} = props



  const mapped = departments.map(item => {
    return <EachDep id={item.id} name={item.name} apiURL={apiURL}  />
  })

  return (
    <>
    <h1>Departments</h1>
    {mapped}
    </>
  )
}