import { useState } from 'react';

export const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrease = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return {
    value,
    decrease,
    increase,
  }
};
