const express = require('express')
const { getContact, addContact } = require('./utils')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getContact', (req, res) => {
  const data = getContact()
  return res.json(data)
})

app.post('/addContact', express.json(), (req, res) => {
  const name = req.body.name
  const phoneNumber = req.body.phoneNumber
  addContact(name, phoneNumber)
  return res.send('Berhasil menambahkan kontak')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})