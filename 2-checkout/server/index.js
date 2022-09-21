require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const myOwnMiddle = require('./middleware/myOwnMiddle')

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

app.use(myOwnMiddle)

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/formOne', (req, res) => {
  res.send('Page One')
})

app.post('/formTwo', (req, res) => {
    req.on('data', function(data) {
    var decoded = data.toString('utf8');
    var infoArray = decoded.split('&');
    var objInfo = {};
    for (var i = 0; i < infoArray.length; i++) {
      var split = infoArray[i].split('=')
      objInfo[split[0]] = split[1];
    }
    var emailPreFix = objInfo.email;
    var emailPostFix = emailPreFix.replace('%40', '@')
    objInfo.email = emailPostFix;
    var query = 'INSERT INTO user SET ?'
    db.query(query, objInfo, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log('SUCCESS!')
      }
    })
    res.send(objInfo)
  })
});

app.post('/formThree', (req, res) => {
  req.on('data', function(data) {
    var decoded = data.toString('utf8');
    var infoArray = decoded.split('&');
    var objInfo = {};
    for (var i = 0; i < infoArray.length; i++) {
      var split = infoArray[i].split('=')
      objInfo[split[0]] = split[1];
    }

    for (var key in objInfo) {
      var fixed = ''
      for (var i = 0; i < objInfo[key].length; i++) {
        if (objInfo[key][i] === '+') {
          fixed = fixed + ' ';
        } else {
          fixed = fixed + objInfo[key][i];
        }
      }
      objInfo[key] = fixed.replace('%2C', ',')
    }
    var query = `UPDATE user SET ? WHERE username = '${objInfo.username}'`
    db.query(query, objInfo, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log('SUCCESS!')
      }
    })
    res.send(objInfo)
  })
})

app.post('/summary', (req, res) => {
  req.on('data', function(data) {
    var decoded = data.toString('utf8');
    var infoArray = decoded.split('&');
    var objInfo = {};
    for (var i = 0; i < infoArray.length; i++) {
      var split = infoArray[i].split('=')
      objInfo[split[0]] = split[1];
    }
    for (var key in objInfo) {
      objInfo[key] = objInfo[key].replace('%2F', '/');
      if (key === 'exp') {
        var fixed = '';
        var split = objInfo[key].split('-');
        var month = split[1];
        var year = split[0].slice(2)
        fixed = fixed + month + '/' + year;
        objInfo[key] = fixed;
      }
    }
    var query = `UPDATE user SET ? WHERE username = '${objInfo.username}'`
    db.query(query, objInfo, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log('SUCCESS!')
      }
    })
    res.send(objInfo)
  })
})

app.post('/summaryTwo', (req, res) => {
  req.on('data', function(data) {
    var decoded = data.toString('utf8');
    var infoArray = decoded.split('&');
    var objInfo = {};
    for (var i = 0; i < infoArray.length; i++) {
      var split = infoArray[i].split('=')
      objInfo[split[0]] = split[1];
    }
  var query = `SELECT * FROM user WHERE username = '${objInfo.username}'`
  db.query(query, (err, response) => {
    if (err) {
      console.log(err)
    } else {
      res.send(response);
    }
  })
  })
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
