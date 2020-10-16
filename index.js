const express = require('express');
const path = require('path');
const url = require('url');
const http = require('http');
const app = express();
require('dotenv').config();
var router = express.Router();

const CONTACT_RECIPIENT = process.env.RECIPIENT;

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

app.get('/hstat', function (req, res) {
  res.render('pages/hstat');
})

app.get('/pace', function (req, res) {
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
  console.log(req.body);
  // res.render()
});


module.exports = router;
