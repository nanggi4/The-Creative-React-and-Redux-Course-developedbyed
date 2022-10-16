import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    const location = axios.get('API_ENDPOINT')
    .then(data => {
      console.log(data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
