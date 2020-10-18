import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const ROOT_URL = 'http://localhost:8000'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const getDriversOverview = function () {
    axios.get(ROOT_URL + '/getDriversOverview')
      .then(response => {
        setIsLoading(false)
        console.log(response);
      })
      .catch(err => console.warn(`Error: ${err}`))
  }

  useEffect(() => {
    getDriversOverview()
  }, [])

  return (
    <div className="App">
      {isLoading && <span>...loading</span>}
    </div>
  );
}

export default App;
