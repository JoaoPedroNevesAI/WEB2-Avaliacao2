const express = require('express');
const router = express.Router();
const { Movie } = require('../models');

// GET /movies – lista todos os filmes
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar filmes.' });
  }
});

// GET /movies/:id – detalhes de um filme
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Filme não encontrado.' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar filme.' });
  }
});

// POST /movies – cria um novo filme
router.post('/', async (req, res) => {
  try {
    const { title, description, releaseYear, genre, posterUrl } = req.body;
    if (!title || !releaseYear) {
      return res.status(400).json({ message: 'Título e ano de lançamento são obrigatórios.' });
    }

    const newMovie = await Movie.create({ title, description, releaseYear, genre, posterUrl });
    res.status(201).json({ message: 'Filme cadastrado com sucesso!', movie: newMovie });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar filme.' });
  }
});

// PUT /movies/:id – atualiza um filme
router.put('/:id', async (req, res) => {
  try {
    const { title, description, releaseYear, genre, posterUrl } = req.body;
    const movie = await Movie.findByPk(req.params.id);

    if (!movie) return res.status(404).json({ message: 'Filme não encontrado.' });
    if (!title || !releaseYear) {
      return res.status(400).json({ message: 'Título e ano de lançamento são obrigatórios.' });
    }

    await movie.update({ title, description, releaseYear, genre, posterUrl });
    res.json({ message: 'Filme atualizado com sucesso!', movie });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar filme.' });
  }
});

// DELETE /movies/:id – deleta um filme
router.delete('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Filme não encontrado.' });

    await movie.destroy();
    res.json({ message: 'Filme deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar filme.' });
  }
});

module.exports = router;
