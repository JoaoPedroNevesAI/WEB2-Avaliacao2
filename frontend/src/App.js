import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MoviesList from './pages/MoviesList';
import AddMovie from './pages/AddMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
