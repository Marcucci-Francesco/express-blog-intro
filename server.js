const posts = require('./data/blog');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('images'));

app.get('/', (req, res) => {
  res.send('Server del mio blog')
});