import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Stack
} from '@mui/material';

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
    posterUrl: ''
  });
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => {
        console.error(err);
        alert('Erro ao carregar filme.');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro ao editar filme');
        setSuccessOpen(true);
        setTimeout(() => navigate('/'), 2000);
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao editar filme.');
      });
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este filme?')) {
      fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (!res.ok) throw new Error('Erro ao excluir filme');
          navigate('/');
        })
        .catch(err => {
          console.error(err);
          alert('Erro ao excluir filme.');
        });
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: "url('https://techbit.pt/wp-content/uploads/2021/01/disney-catalogo-filmes-series-star.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
          borderRadius: 2,
          bgcolor: 'rgba(0,0,0,0.7)',
          color: '#fff',
          boxShadow: '0 0 10px rgba(255,215,0,0.8)',
        }}
      >
        <Typography variant="h4" mb={3} align="center">
          Editar Filme
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Título"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fbc02d' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Descrição"
            name="description"
            value={movie.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fbc02d' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Ano de Lançamento"
            name="releaseYear"
            type="number"
            value={movie.releaseYear}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fbc02d' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="Gênero"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fbc02d' } }}
            inputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            label="URL do Pôster"
            name="posterUrl"
            value={movie.posterUrl}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#fbc02d' } }}
            inputProps={{ style: { color: '#fff' } }}
          />

          {/* Botões alinhados lado a lado */}
          <Stack direction="row" spacing={2} mt={4} justifyContent="center">
            <Button type="submit" variant="contained" color="warning">
              Salvar
            </Button>
            <Button component={Link} to="/" variant="outlined" color="inherit">
              Cancelar
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Excluir
            </Button>
          </Stack>
        </form>
      </Container>

      {/* Snackbar de sucesso */}
      <Snackbar
        open={successOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Filme atualizado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default EditMovie;
