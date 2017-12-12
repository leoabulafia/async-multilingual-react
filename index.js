const express = require('express');
const app = express();
const path = require('path');
const content = require('./api/content');

app.get('/api/lang', (req, res) => {
  res.send(req.headers['accept-language'].split(',')[0].slice(0, 2));
});

app.get('/api/content', (req, res) => {
  res.json(content);
});

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
