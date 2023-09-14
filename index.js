const express = require('express')
const { getContact } = require('./utils')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getContact', (req, res) => {
  const data = getContact()
  return res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})