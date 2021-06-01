// External packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.post('/songs', (req, res) => {
  const { name, artist, album, length } = req.body

  res.send({
    name: name,
    artist: artist,
    album: album,
    length: length
  })
})

module.exports = app
