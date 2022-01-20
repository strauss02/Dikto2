const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.get('/', (req, res) => {
  res.send('aloha')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`Server listening on port ${PORT}`))
