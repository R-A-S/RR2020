// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  const _increase = () => {
    setValue(value + 1);
  };

  setTimeout(() => {
    _increase();
  }, 1000);

  return (
    <>
      <h1>
        { value }
      </h1>
      <button onClick = { _increase }>+</button>
    </>
  );
};

render(<Counter />, document.getElementById('root'));
