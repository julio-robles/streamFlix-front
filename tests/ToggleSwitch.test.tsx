import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleSwitch from '../src/components/button/ToggleSwitch';

describe('ToggleSwitch', () => {
  test('muestra "OFF" cuando la propiedad on es false', () => {
    const onToggle = jest.fn();
    render(<ToggleSwitch on={false} onToggle={onToggle} />);
    expect(screen.getByRole('button')).toHaveTextContent('OFF');
  });

  test('muestra "ON" cuando la propiedad on es true', () => {
    const onToggle = jest.fn();
    render(<ToggleSwitch on={true} onToggle={onToggle} />);
    expect(screen.getByRole('button')).toHaveTextContent('ON');
  });

  test('llama onToggle al hacer click en el botón', () => {
    const onToggle = jest.fn();
    render(<ToggleSwitch on={false} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});