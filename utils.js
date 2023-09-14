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

module.exports = { getContact, addContact }
