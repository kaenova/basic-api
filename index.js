const express = require('express')
const { getContact, addContact, deleteContact, updateContact } = require('./utils')
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

app.delete('/deleteContact', express.json(), (req, res) => {
  const id = req.body.id
  if (deleteContact(id)) {
    return res.send('Berhasil menghapus kontak')
  } else {
    return res.send("Gagal menghapus kontak")
  }
})

app.patch('/updateContact', express.json(), (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const phoneNumber = req.body.phoneNumber
  if (updateContact(id, name, phoneNumber)) {
    return res.send('Berhasil mengupdate kontak')
  } else {
    return res.send("Gagal mengupdate kontak")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})