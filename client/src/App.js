import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])
  async function pegarApi() {
    const response = await fetch('http://localhost:5000/api')
    const data = await response.json()
    setBackendData(data)
  }
  pegarApi()

  return (
    <div className="App">
      {(typeof backendData.users === 'undefined') ? (
        <p>loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
