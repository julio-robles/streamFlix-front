import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MovieDetailProps {
  movie: {
    id: number;
    name: string;
    image?: { medium: string };
    summary?: string;
  };
  onClose: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#111111] bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full md:w-2/3 md:h-auto lg:w-1/2 lg:h-auto overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{movie.name}</h2>
        <p className="text-gray-700 italic mb-4">{movie.summary || 'No description available.'}</p>
        {movie.image && (
          <img
            src={movie.image.medium}
            alt={movie.name}
            className="w-32 h-32 object-cover rounded-md mx-auto"
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
