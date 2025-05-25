import axios from 'axios';
import { getBaseURL } from '../utils/getBaseURL';

export const apiClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 5000,
  headers: {
    Accept: 'application/json'
  },
  params: {
    api_key: import.meta.env.VITE_IMDB_API_KEY
  }
});