import * as api from '../src/services/apiClient';
import { getMovieById } from '../src/services/MovieService';

jest.mock('../src/services/apiClient', () => ({
  apiClient: {
    get: jest.fn()
  }
}));

describe('MovieService', () => {
  it('devuelve película válida', async () => {
    (api.apiClient.get as jest.Mock).mockResolvedValue({
      data: {
        id: 1,
        title: 'Inception',
        release_date: '2010-07-16'
      }
    });

    const movie = await getMovieById(1);
    expect(movie).toEqual({
      id: 1,
      title: 'Inception',
      release_date: '2010-07-16'
    });
  });

  it('lanza error si faltan campos', async () => {
    (api.apiClient.get as jest.Mock).mockResolvedValue({
      data: { title: 'Sin ID' }
    });

    await expect(getMovieById(99)).rejects.toThrow();
  });

  it('lanza error si la API falla', async () => {
    (api.apiClient.get as jest.Mock).mockRejectedValue(new Error('API Error'));
    await expect(getMovieById(123)).rejects.toThrow('API Error');
  });

  it('devuelve película válida con todos los campos del schema', async () => {
    (api.apiClient.get as jest.Mock).mockResolvedValue({
      data: {
        id: 2,
        title: 'Matrix',
        release_date: '1999-03-31'
      }
    });
    const movie = await getMovieById(2);
    expect(movie).toEqual({
      id: 2,
      title: 'Matrix',
      release_date: '1999-03-31'
    });
  });
});
