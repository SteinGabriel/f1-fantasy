import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

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

  const renderTableHeader = function () {
    return (
      <thead>
        <tr>
          <th>Driver</th>
          <th>Average Overtakes</th>
          <th>Beat Teammate </th>
          <th>DNF Rate</th>
          <th>Top 5 Highest Scorer</th>
          <th>Total Podiums</th>
          <th>Total Fastest Laps</th>
          <th>Average Fantasy Points</th>
          <th>Total Fantasy Points</th>
        </tr>
      </thead>
    )
  }

  const renderTableBody = function () {
    return (
      <tbody>
        {driversOverviewList.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.averageOvertakes}</td>
              <td>{row.beatTeammateRate}</td>
              <td>{row.dnfRate}</td>
              <td>{row.top5HighestScorer}</td>
              <td>{row.totalPodiums}</td>
              <td>{row.totalFastestLaps}</td>
              <td>{row.averageFantasyPoints}</td>
              <td>{row.totalFantasyPoints}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }

  return (
    <div className="App">
      {isLoading && <span>...loading</span>}
      {!isLoading &&
        <table>
          {renderTableHeader()}
          {renderTableBody()}
        </table>
      }
    </div>
  );
}

export default App;
