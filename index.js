const express = require('express');
const app = express();
const path = require('path');
const content = require('./api/content');

app.use('/api', express.static('public'));

app.get('/api/lang', (req, res) => {
  res.send(req.headers['accept-language'].split(',')[0].slice(0, 2));
});

app.get('/api/content', (req, res) => {
  res.json(content);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
