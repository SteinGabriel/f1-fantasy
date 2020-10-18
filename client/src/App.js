import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import DriversOverviewTable from './components/driversOverviewTable/driversOverviewTable'

const ROOT_URL = 'http://localhost:8000'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [driversOverviewList, setDriversOverviewList] = useState([])

  const getDriversOverview = function () {
    axios.get(ROOT_URL + '/getDriversOverview')
      .then(response => {
        setIsLoading(false)
        setDriversOverviewList(response.data)
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
      {!isLoading && <DriversOverviewTable driversOverviewList={driversOverviewList} />}
    </div>
  );
}

export default App;
