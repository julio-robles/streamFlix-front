import { apiClient } from './apiClient';
import { MovieSchema, type Movie } from '../schemas/movie.schema';

export async function getMovieById(id: number): Promise<Movie> {
  const res = await apiClient.get(`/movie/${id}`);
  return MovieSchema.parse(res.data);
}
