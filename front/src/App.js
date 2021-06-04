import './App.css';

import Register from './components/Register'
const apiURL = 'http://localhost:8000/api'
function App() {
  return (
    <div className="App">
      <Register apiURL={apiURL}/>
    </div>
  );
}

export default App;
