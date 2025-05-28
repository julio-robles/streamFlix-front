import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieDetail from '../src/components/MovieDetail';

describe('MovieDetail Component', () => {
  const mockMovie = {
    id: 1,
    name: 'Test Movie',
    image: { medium: 'test-image-url.jpg' },
    summary: 'This is a test movie summary.',
  };

  const mockOnClose = jest.fn();

  it('renders the movie details correctly', () => {
    render(<MovieDetail movie={mockMovie} onClose={mockOnClose} />);

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('This is a test movie summary.')).toBeInTheDocument();
    expect(screen.getByAltText('Test Movie')).toHaveAttribute('src', 'test-image-url.jpg');
  });

  it('calls onClose when the close button is clicked', () => {
    render(<MovieDetail movie={mockMovie} onClose={mockOnClose} />);

    const closeButton = screen.getByText('✕');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
