const express = require('express')
const app = express()
const port = 8000

//This is the basic structure of a express server running on nodejs. 
// To add more endpoint, use the app instance's api to serve get, put, post, patch and delete 
// http requests. 
// Here you can import the controllers functions to perform backend logic and return a response to the frontend

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.put('/', (req, res) => {
  // PUT controller function 
})

app.post('/', (req, res) => {
  // POST controller function 
})

app.patch('/', (req, res) => {
  // PATCH controller function 
})

app.delete('/', (req, res) => {
  // DELETE controller function 
})

// Starts a server, serving HTTP methods endpoints to specified port 
app.listen(port, () => {
  console.log('Example running on port ' + port);
})