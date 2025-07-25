import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fbc02d', // amarelo ouro
    },
    secondary: {
      main: '#fbc02d', // para botões etc.
    },
    background: {
      default: '#000000', // fundo escuro base
      paper: 'rgba(0, 0, 0, 0.8)', // cards e containers
    },
    text: {
      primary: '#ffffff',
      secondary: '#fbc02d',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '1px',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;