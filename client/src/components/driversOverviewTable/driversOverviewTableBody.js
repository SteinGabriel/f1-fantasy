import React from 'react'

function tableBody(props) {
  const { driversOverviewList } = props
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

export default tableBody