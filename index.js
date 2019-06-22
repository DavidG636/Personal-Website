const express = require('express');
const path = require('path');
const url = require('url');
const http = require('http');
const app = express();
var router = express.Router();



app.listen(3000)



// app.use(function (req, res, next) {
//   res.send(home)
// })

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('pages/about');
})

app.get('/WhatAmI', function (req, res) {
  res.render('pages/description');
})

app.get('/projects', function (req, res) {
  res.render('pages/projects');
})

module.exports = router;
