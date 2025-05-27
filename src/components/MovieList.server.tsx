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
    <ul>
      {data.map((item: any) => (
        <li key={item.show.id}>
          <strong>{item.show.name}</strong>
          {item.show.image && (
            <img src={item.show.image.medium} alt={item.show.name} />
          )}
        </li>
      ))}
    </ul>
  );
}
