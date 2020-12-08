// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [value, setValue] = useState(0);

  const _increase = () => {
      setValue(value + 1);
  };

  const _decrease = () => {
    setValue(value - 1);
  };

  return (
    <>
      <button onClick = { _decrease }>-</button>
      <h1>
        { value }
      </h1>
      <button onClick = { _increase }>+</button>
    </>
  );
};

render(<Counter />, document.getElementById('root'));
