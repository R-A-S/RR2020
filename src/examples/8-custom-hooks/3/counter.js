// Core
import React from 'react';

// Custom Hooks
import { useCounter } from './useCounter';

export const Counter = () => {
  const { value, increase, decrease } = useCounter();

  return (
    <>
      <button onClick = { decrease }>-</button>
      <h1>
        { value }
      </h1>
      <button onClick = { increase }>+</button>
    </>
  );
};
