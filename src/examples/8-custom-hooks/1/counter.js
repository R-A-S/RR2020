// Core
import React, { useState } from 'react';

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    console.log('increase')
    setValue((prevValue) => prevValue + 1);
  };

  const decrease = () => {
    console.log('decrease')
    setValue((prevValue) => prevValue - 1);
  };

  console.log('value');
  console.log(value);
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
