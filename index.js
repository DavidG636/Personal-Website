const express = require('express');
const path = require('path');
const url = require('url');
const http = require('http');
const vm = require('vm');
const app = express();
require('dotenv').config();
var firebase = require("firebase");
var Filter = require('bad-words'), filter = new Filter();
var router = express.Router();

var firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.FIREBASEAUTHDOMAIN,
    databaseURL: process.env.FIREBASEDATABASEURL,
    projectId: process.env.FIREBASEPROJECTID,
    storageBucket: process.env.FIREBASESTORAGEBUCKET,
    messagingSenderId: process.env.FIREBASEMESSAGINGSENDERID,
    appId: process.env.FIREBASEAPPID,
    measurementId: process.env.FIREBASEMEASUREMENTID
};

firebase.initializeApp(firebaseConfig);
var contactFormDatabase = firebase.database().ref('/');;

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

const resolve = require('path').resolve

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function (req, res) {
  res.render('pages/home');
})

app.get('/WhoAmI', function (req, res) {
  res.render('pages/description');
})

app.get('/projects', function (req, res) {
  res.render('pages/projects');
})

app.get('/WhoAmI/hstat', function (req, res) {
  res.render('pages/hstat');
})

app.get('/WhoAmI/pace', function (req, res) {
  res.render('pages/pace');
})

app.get('/Project-Info', function (req, res) {
  res.render('pages/project-info');
})


app.get('/Primality-Checker', function (req, res) {
  res.render('pages/primality-checker');
})

app.get('/ParagraphUtilities', function (req, res) {
  res.render('pages/paragraphUtilitiesHomePage');
})

app.get('/ParagraphUtilities/Case', function (req, res) {
  res.render('pages/case');
})

app.get('/ParagraphUtilities/Paragraph-Info', function (req, res) {
  res.render('pages/paragraphInfo');
})

app.get('/contact', function (req, res) {
  res.render('pages/contact')
})

app.post('/contact', function(req, res) {
  var contactSubmission = req.body;
  delete contactSubmission["Submit"];
  let profanityFound = false;
  let blacklistedEmailFound = false;
  var letterRegExp = /[a-zA-Z]/g;
  let emptyInput = false;
  const blacklistedEmails = process.env.REJECTEDEMAILS.split(", ");
  for (let i = 0; i <= blacklistedEmails.length; i++) {
    if (contactSubmission["email"] == blacklistedEmails[i]) {
      blacklistedEmailFound = true;
    }
  }
  Object.keys(contactSubmission).forEach(function(k){
    if (filter.isProfane(contactSubmission[k])) {
      profanityFound = true;
    }
    if(!letterRegExp.test(contactSubmission[k])) {
      emptyInput = true;
    }
  });

  if (profanityFound) {
    res.redirect('/contact?submitted=profanity');
  }
  else if (emptyInput) {
    res.redirect('/contact?submitted=empty');
  }
  if (blacklistedEmailFound) {
    res.redirect('/contact?submitted=blacklistedEmail');
  }
  else {
    res.redirect('/contact?submitted=submitted');
    contactFormDatabase.push(contactSubmission);
  }
});


module.exports = router;
