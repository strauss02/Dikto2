const db = require('../connectdb')
const express = require('express')

const router = express.Router()

const posByNum = {
  1: 'n.',
  2: 'p.',
  3: 'v.',
  4: 'a.',
  5: 'adv.',
  6: 'prep.',
  7: 'conj.',
  8: 'interj.',
}

router.get('/:part', async (req, res) => {
  console.log(req.query)
  // if request is sent with query letter then search by letter
  if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
    console.log(req.params.part)
    const pos = posByNum[Number(req.params.part)]

    params = {
      TableName: 'dictionary',
      IndexName: 'Pos-Word-index',
      KeyConditionExpression: '#pos = :pos',
      ExpressionAttributeNames: {
        '#pos': 'Pos',
      },
      ExpressionAttributeValues: {
        ':pos': pos,
      },
      Limit: 100,
    }

    let entries = []

    db.query(params, (err, data) => {
      if (err) {
        console.log('error', err)
        res.send('error')
      } else {
        console.log('success')
        entries = data.Items
        console.log(entries)
        return res.send(data.Items)
      }
    })
  } else {
    res.send('shit')
  }
})

function getRandomWord(arr) {
  arr.length
}

module.exports = router
