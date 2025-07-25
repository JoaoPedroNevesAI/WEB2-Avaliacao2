import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress
} from '@mui/material';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`)
      .then(res => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress color="warning" />
      </Box>
    );
  }

  if (!movie) {
    return (
      <Typography variant="h5" color="error" align="center" mt={4}>
        Filme não encontrado.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          p: 4,
          bgcolor: 'rgba(0,0,0,0.8)',
          color: '#fff',
          boxShadow: '0 0 20px rgba(255,215,0,0.6)',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" mb={2} align="center">
          🎥 {movie.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom><strong>Gênero:</strong> {movie.genre}</Typography>
        <Typography variant="subtitle1" gutterBottom><strong>Ano:</strong> {movie.releaseYear}</Typography>
        <Typography variant="body1" paragraph>{movie.description}</Typography>
        {movie.posterUrl && (
          <Box mb={2} display="flex" justifyContent="center">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </Box>
        )}
        <Box mt={2} display="flex" justifyContent="center">
          <Button component={Link} to="/" variant="contained" color="warning">
            Voltar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default MovieDetails;
