import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=> {   

    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(resp => {
        setData(resp.data.results);        
      })
  }, [])

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {data.map((dato) => 
        <ul>          
          <li>{dato.name}</li>
          <li>{dato.url}</li>
        </ul>)
      }            
    </div>
  );
}

export default App;
