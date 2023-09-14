const fs = require('fs');

function getContact() {
  let jsonData = fs.readFileSync('data.json')
  let data = JSON.parse(jsonData)
  return data
}

module.exports = { getContact }
