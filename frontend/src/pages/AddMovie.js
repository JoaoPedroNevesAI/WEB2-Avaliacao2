import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert
} from '@mui/material';

function AddMovie() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
    posterUrl: ''
  });

  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro ao cadastrar filme');
        setSuccessOpen(true); // exibe a mensagem
        setTimeout(() => navigate('/'), 2000); // espera 2 segundos antes de voltar
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao cadastrar filme.');
      });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
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
          Adicionar Filme
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

          <Box mt={3} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="secondary">
              Cadastrar Filme
            </Button>
          </Box>
        </form>
      </Container>

      {/* Snackbar de sucesso */}
      <Snackbar
        open={successOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Filme cadastrado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AddMovie;
