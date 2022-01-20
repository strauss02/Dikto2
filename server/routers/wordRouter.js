const db = require('../connectdb')
const express = require('express')

const router = express.Router()

router.get('/:word', (req, res) => {
  const params = {
    TableName: 'dictionary',
    KeyConditionExpression: '#word = :word',
    ExpressionAttributeNames: {
      '#word': 'Word',
    },
    ExpressionAttributeValues: {
      ':word': req.params.word.toUpperCase(),
    },
  }

  db.query(params, (err, data) => {
    if (err) {
      console.log('error', err)
      res.send('error')
    } else {
      console.log('success', data)
      res.send(data.Items)
    }
  })
})

module.exports = router
