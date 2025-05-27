import React from 'react';

interface ToggleSwitchProps {
  on: boolean;
  onToggle: () => void;
}

export default function ToggleSwitch({ on, onToggle }: ToggleSwitchProps) {
  return (
    <button aria-pressed={on} onClick={onToggle}>
      {on ? 'ON' : 'OFF'}
    </button>
  );
}