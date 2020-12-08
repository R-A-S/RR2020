// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [value, setValue] = useState(0);

  setValue(2);

  return (
    <>
      <h1>
        { value }
      </h1>
    </>
  );
};

render(<Counter />, document.getElementById('root'));
