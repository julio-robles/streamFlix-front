import { useEffect, useState } from 'react';
import { getMovieById } from '../services/MovieService';
import type { Movie } from '../schemas/movie.schema';

export default function MovieCard({ id }: { id: number }) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMovieById(id)
      .then(setMovie)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>Cargando…</p>;
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Estreno: {movie.release_date}</p>
    </div>
  );
}
