// src/components/MovieList.tsx
import React, { useEffect, useState } from 'react';
import { apiClient } from '../services/apiClient';

interface Props {
  query: string;
}

export default function MoviesList({ query }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    apiClient.get(`?q=${query}`)
      .then(res => setData(res.data))
      .catch(err => {
        console.error('Error:', err);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, [query]);

  if (!query) return <p>Escribe una búsqueda para comenzar.</p>;
  if (loading) return <p>Cargando...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item: any) => (
        <div key={item.show.id} className="bg-white shadow-md rounded-lg p-4">
          <strong className="block text-lg font-bold mb-2">{item.show.name}</strong>
          {item.show.image && (
            <img src={item.show.image.medium} alt={item.show.name} className="w-full h-auto rounded-md" />
          )}
        </div>
      ))}
    </div>
  );
}
