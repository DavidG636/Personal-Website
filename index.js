const express = require('express');
const path = require('path');
const url = require('url');
const http = require('http');
const app = express();
var router = express.Router();

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

const resolve = require('path').resolve

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));

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

app.get('/case', function (req, res) {
  res.render('pages/case');
})

app.get('/Primality-Checker', function (req, res) {
  res.render('pages/primality-checker');
})

module.exports = router;
