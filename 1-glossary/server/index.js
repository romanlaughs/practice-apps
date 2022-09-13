require("dotenv").config();
const express = require('express');
const app = express();
const db = require('./db.js');
const port = 3000;
const wordData = require('./wordData.js')

app.get('/', (req, res) => {
  db.check(wordData)
  res.send('TEST')
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})

