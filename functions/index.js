const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


exports.app = functions.https.onRequest(app);
