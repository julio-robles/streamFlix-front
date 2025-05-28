'use client';
import React, { Suspense, useState } from 'react';
import MoviesList from '../components/MovieList.server';
import MoviesFilters from '../components/MovieFilters';
import MovieSections from '../components/MovieSections';

const sections = [
  { id: 'action', name: 'Action' },
  { id: 'comedy', name: 'Comedy' },
  { id: 'drama', name: 'Drama' },
  { id: 'horror', name: 'Horror' },
];

export default function Page() {
  const [query, setQuery] = useState('batman');
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionSelect = (sectionId: string) => {
    setSelectedSection(sectionId);
    setQuery(sectionId); // Update query based on selected section
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Películas destacadas</h1>
      <MovieSections sections={sections} onSectionSelect={handleSectionSelect} />
      <MoviesFilters onFilterChange={setQuery} />
      <Suspense fallback={<p>Cargando resultados...</p>}>
        <MoviesList query={query} />
      </Suspense>
    </div>
  );
}
