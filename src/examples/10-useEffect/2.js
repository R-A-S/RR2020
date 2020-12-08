// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const CalculateComponent = ({ a, b, text }) => {
  console.log('Render');

  const [ title, setTitle ] = useState(text);

  const updateTitle = () => {
    setTitle((prevTitle) => prevTitle.toUpperCase());
  };

  const sum = (first, second) => {
    console.log('Sum');
    return first + second;
  };

  return (
    <>
      <h1>{ title }</h1>
      <h2>{ sum(a, b) }</h2>
      <button onClick={ updateTitle }>Update Title</button>
    </>
  )
};

const Example = () => {
  return (
    <>
      <CalculateComponent a={ 1 } b ={ 2 } text='Sum' />
    </>
  )
};

render(<Example />, document.getElementById('root'));
