import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  TextField,
  Pagination
} from '@mui/material';

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const moviesPerPage = 6;

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredMovies.length / moviesPerPage);
  const startIndex = (page - 1) * moviesPerPage;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + moviesPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        color: '#fff',
        pt: 4,
        pb: 6,
        zIndex: 1,
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('https://techbit.pt/wp-content/uploads/2021/01/disney-catalogo-filmes-series-star.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          filter: 'brightness(0.5)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h3" sx={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
          🎬 Catálogo de Filmes
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/add">
          + Adicionar Filme
        </Button>
      </Box>

      <TextField
        label="Buscar filmes"
        variant="filled"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 3, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 1 }}
        InputLabelProps={{ style: { color: '#fbc02d' } }}
        inputProps={{ style: { color: '#fff' } }}
      />

      <Grid container spacing={3} justifyContent="center">
        {currentMovies.map(movie => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 220,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 30px rgba(255, 215, 0, 0.8)',
                },
              }}
            >
              {movie.posterUrl && (
                <CardMedia
                  component="img"
                  image={movie.posterUrl}
                  alt={movie.title}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: '4px 4px 0 0',
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" noWrap title={movie.title}>
                  {movie.title}
                </Typography>
                <Typography variant="body2" noWrap title={movie.description}>
                  {movie.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" component={Link} to={`/movies/${movie.id}`}>
                  Detalhes
                </Button>
                <Button size="small" color="secondary" component={Link} to={`/edit/${movie.id}`}>
                  Editar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination count={pageCount} page={page} onChange={handlePageChange} color="secondary" />
        </Box>
      )}
    </Container>
  );
}

export default MoviesList;
