const express = require('express')
const app = express()
const routes = require('./routes')
const port = 8000
const cors = require('cors')

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Add cors whitelist
app.use(cors(corsOptions))
// Add routes to root endpoint.
app.use('/', routes)

// Starts a server, serving backend 
// API endpoints(routes) to specified port
app.listen(port, () => {
  console.log('Example running on port ' + port);
})