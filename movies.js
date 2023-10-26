const express = require('express');
const app = express();
const movies = require('./movies.json');

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const movie = movies.movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found.');
  res.json(movie);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
