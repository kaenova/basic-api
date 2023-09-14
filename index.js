const express = require('express')
var jwt = require('jsonwebtoken');
const { getContact, addContact, deleteContact, updateContact } = require('./utils')
const app = express()
const port = 3000

// Ini digunakan untuk JWT
const serverSecret = 'bangkit2023H2'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  const data = getContact()
  return res.json(data)
})

app.post('/contact', express.json(), (req, res) => {
  // Butuh penjagaan login
  try {
    const userKeyWord = req.body.keyWord
    jwt.verify(userKeyWord, serverSecret)
  } catch (e) {
    return res.send('Anda tidak diperbolehkan menggunakan API ini')
  }
  const name = req.body.name
  const phoneNumber = req.body.phoneNumber
  addContact(name, phoneNumber)
  return res.send('Berhasil menambahkan kontak')
})

app.delete('/contact', express.json(), (req, res) => {
  const id = req.body.id
  if (deleteContact(id)) {
    return res.send('Berhasil menghapus kontak')
  } else {
    return res.send("Gagal menghapus kontak")
  }
})

app.patch('/contact', express.json(), (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const phoneNumber = req.body.phoneNumber
  if (updateContact(id, name, phoneNumber)) {
    return res.send('Berhasil mengupdate kontak')
  } else {
    return res.send("Gagal mengupdate kontak")
  }
})

app.post('/login', express.json(), (req, res) => {
  const email = req.body.email
  const password = req.body.password

  // Sebagai contoh pengecekkan email dan password
  // Lebih aman dengan disimpan di database serta password
  // yang di encrypt dgn bcrypt
  if (email === 'kaenova@bangkit.academy' && password == 'kerjago') {
    return res.send(jwt.sign({ email: email }, serverSecret))
  }
  return res.send("Anda salah password")
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})