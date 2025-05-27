import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import Movies from './pages/movies'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta estándar */}
        <Route path="/" element={<Movies />} />
        {/* Ejemplo de otra ruta */}
        <Route path="/featured" element={
          <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Película destacada</h1>
            <MovieCard id={550} /> {/* 550 = Fight Club en TMDb */}
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;