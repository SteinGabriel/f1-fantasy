import React from 'react'
import TableHeader from './driversOverviewTableHeader'
import TableBody from './driversOverviewTableBody'

function table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody {...props} />
    </table>
  )
}

export default table