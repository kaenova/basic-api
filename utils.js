const fs = require('fs');
const { nanoid } = require('nanoid')

function getContact() {
  let jsonData = fs.readFileSync('data.json')
  let data = JSON.parse(jsonData)
  return data
}

function addContact(name, phoneNumber) {
  let id = nanoid(8)
  let jsonData = fs.readFileSync('data.json')
  let data = JSON.parse(jsonData)
  data.push({
    "id": id,
    "name": name,
    "phone_number": phoneNumber
  })
  jsonData = JSON.stringify(data)
  fs.writeFileSync('data.json', jsonData)
}

function deleteContact(id) {
  let jsonData = fs.readFileSync('data.json')
  let data = JSON.parse(jsonData)

  // search through data by looping
  const index = data.findIndex((temp) => temp.id === id)

  if (index === -1) {
    return false
  }

  data.splice(index, 1)
  jsonData = JSON.stringify(data)
  fs.writeFileSync('data.json', jsonData)
  return true
}

function updateContact(id, name, phoneNumber) {
  let jsonData = fs.readFileSync('data.json')
  let data = JSON.parse(jsonData)

  // search through data by looping
  const index = data.findIndex((temp) => temp.id === id)

  if (index === -1) {
    return false
  }

  data[index].name = name
  data[index].phoneNumber = phoneNumber

  jsonData = JSON.stringify(data)
  fs.writeFileSync('data.json', jsonData)
  return true
}

module.exports = { getContact, addContact, deleteContact, updateContact }
