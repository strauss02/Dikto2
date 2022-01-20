const db = require('../connectdb')
const express = require('express')

const router = express.Router()

router.use('/', (req, res) => {
  res.send('blah')
})

module.exports = router
