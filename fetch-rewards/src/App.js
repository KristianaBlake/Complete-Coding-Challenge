import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemTable from './components/ItemTable.js';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json')
      .then((response) => {
        setItems(response.data);
        console.log(response.data)
      })
  }, [])

  return (
    <div className="App">
      <ItemTable items={items} />
    </div>
  );
}

export default App;
