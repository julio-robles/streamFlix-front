'use client';
import React, { Suspense, useState } from 'react';
import MoviesList from '../components/MovieList.server';
import MoviesFilters from '../components/MovieFilters';

export default function Page() {
  const [query, setQuery] = useState('batman');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buscador de Películas</h1>
      <MoviesFilters onFilterChange={setQuery} />
      <Suspense fallback={<p>Cargando resultados...</p>}>
        <MoviesList query={query} />
      </Suspense>
    </div>
  );
}
