// Core
import { useState } from 'react';

// Helpers
import { _increase } from './increase';
import { _decrease } from './decrease';

export const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(_increase);
  };

  const decrease = () => {
    setValue(_decrease);
  };

  return {
    value,
    increase,
    decrease
  }
};
