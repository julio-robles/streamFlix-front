// Solo para Jest / Node
import dotenv from 'dotenv';
dotenv.config();

export function getBaseURL(): string {
  return process.env.VITE_IMDB_API_BASE_URL || '';
}