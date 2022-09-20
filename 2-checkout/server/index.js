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
    res.send(objInfo);
  })
  // res.send('Page Two')
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
