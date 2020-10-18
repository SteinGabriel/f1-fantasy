const puppeteer = require('puppeteer')

exports.getDriversOverview = async function (req, res) {
  try {
    const URL = "https://www.f1fantasytracker.com/"
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(URL)
    const rows = await page.$$eval('table > tbody > tr', rows => {
      return Array.from(rows, row => {
        const columns = row.querySelectorAll('td')
        return Array.from(columns, column => column.innerText)
      })
    })

    const response = rows.map(row => {
      // Remove first and last element because they don't have any content
      row.shift()
      row.pop()
      // Return and object to be pushed 
      // into the response Array
      // Each item represents one row of 
      // the driver overview table and it's content. 
      return {
        "name": row[0],
        "averageOvertakes": row[1],
        "beatTeammateRate": row[2],
        "dNFRate": row[3],
        "top5HighestScorer": row[4],
        "totalPodiums": row[5],
        "totalFastestLaps": row[6],
        "averageFantasyPoints": row[7],
        "totalFantasyPoints": row[8],
      }
    })

    res.send(response)
  } catch (error) {
    console.warn(`Error => ${error}`);
  }
}