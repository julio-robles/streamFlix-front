import { useState } from 'react'
import MovieCard from './components/MovieCard';
import './App.css'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Película destacada</h1>
      <MovieCard id={550} /> {/* 550 = Fight Club en TMDb */}
    </div>
  );
}

export default App
