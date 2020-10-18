const express = require('express')
const router = express.Router()
const webscrapperController = require('./controllers/webscraperController')

router.get('/', (req, res) => {
  res.send('Hello from router!')
})

router.get('/getDriversOverview', webscrapperController.getDriversOverview)

router.put('/', (req, res) => {
  // PUT controller function 
})

router.post('/', (req, res) => {
  // POST controller function 
})

router.patch('/', (req, res) => {
  // PATCH controller function 
})

router.delete('/', (req, res) => {
  // DELETE controller function 
})

module.exports = router