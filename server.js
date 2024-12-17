const posts = require('./data/blog');
const {getPath} = require('./modules/utils');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('images'));

app.get('/', (req, res) => {
  res.send('Server del mio blog')
});

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
});

app.get('/bacheca', (req, res) => {

  const pathPost = posts.map(post => {
    post.immagine = getPath(req) + post.immagine;
    return post
  });

  res.json(pathPost);

})