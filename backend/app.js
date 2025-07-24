const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moviesRoutes = require('./routes/movies');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rota raiz para responder GET /
app.get('/', (req, res) => {
  res.send('API de Catálogo de Filmes funcionando!');
});

// Rotas para /movies
app.use('/movies', moviesRoutes);

module.exports = app;
