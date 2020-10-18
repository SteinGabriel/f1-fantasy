const express = require('express')
const app = express()
const routes = require('./routes')
const port = 8000

// Add routes to root endpoints.
app.use('/', routes)

// Starts a server, serving backend 
// API endpoints(routes) to specified port
app.listen(port, () => {
  console.log('Example running on port ' + port);
})