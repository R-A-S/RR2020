// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Person = () => {
  const [name, setName] = useState(null);

  const changeName = (event) => {
    const updatedName = event.target.value;

    setName(updatedName);
  };

  return (
    <>
      <input type='text' onChange={ changeName } />
      <h1>My name is { name }</h1>
    </>
  )
};

render(<Person />, document.getElementById('root'));
