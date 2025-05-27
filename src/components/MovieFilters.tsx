'use client';
import React, { useState, useTransition } from 'react';

interface Props {
  onFilterChange: (query: string) => void;
}

export default function MoviesFilters({ onFilterChange }: Props) {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    startTransition(() => {
      onFilterChange(value);
    });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar película..."
        className="border px-3 py-2 rounded w-full"
      />
      {isPending && <p className="text-gray-500 text-sm mt-1">Filtrando...</p>}
    </div>
  );
}
