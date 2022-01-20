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

router.get('/:part', (req, res) => {
  posByNum.req.params.part
})

router.get('/:part?letter', (req, res) => {})

module.exports = router
