require("dotenv").config();
const express = require('express');
const app = express();
const db = require('./db.js');
const port = 3000;
const path = require('path');
const wordData = require('./wordData.js')

app.use(express.static(__dirname + '/../client/dist'))


app.get('/test', (req, res) => {
  db.check(wordData, {isWord: true})
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.send("Something Went Wrong!")
  })
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})

