import React from 'react';

interface Item { id: number; name: string; }

const items: Item[] = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` }));

export default function HeavyList() {
  // No memoization or virtualization
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => console.log(item.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
}