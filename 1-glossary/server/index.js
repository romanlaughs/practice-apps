require("dotenv").config();
const express = require('express');
const fs = require('fs');
const app = express();
const db = require('./db.js');
const port = 3000;
const path = require('path');
const wordData = require('./wordData.js')

app.use(express.static(__dirname + '/../client/dist'))


app.get('/test', (req, res) => {
  db.find({isWord: true})
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.send("Something Went Wrong!")
  })
})

app.post('/delete', (req, res) => {
  req.on('data', (data) => {
    var result = data.toString('utf8');
    return db.remove({word: result})
    .then((results) => {
      res.send(`${result} was Deleted!`)
    })
  })
})

app.post('/edit', (req, res) => {
  req.on('data', (data) => {
    var result = data.toString('utf8');
    res.send(result);
  })
})

app.post('/add', (req, res) => {
  req.on('data', (data) => {
    var result = data.toString('utf8');
    var next = result.split(',')

    for (var i = 0; i < next.length; i++) {
      if (next[i].toString() === '[object Object]') {
        res.send('Please Fill Out the Entire Form Before Clicking Submit')
        return;
      }
    }
    var exportArr = [];
    var exportObj = {};

    exportObj.word = next[0];
    exportObj.category = next[1];
    exportObj.definition = next [2];
    exportObj.isWord = true;

    exportArr.push(exportObj)

    return db.check(exportArr, {word: next[0]})
    .then((data) => {
      var aOrE = 'Added'
      if(data['deletedCount'] > 0) {
        aOrE = 'Edited'
      }
      res.send(`You ${aOrE} the Word: ${next[0]}!`)
    })
  })

})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})

