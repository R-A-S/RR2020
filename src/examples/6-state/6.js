// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Wizard = () => {
    const [state, setState] = useState({
      name: 'Gendalf',
      age:  6000,
    });

    const { name, age } = state;

    const _transform = () => {
      setState((prev) => ({
          ...prev,
          name: 'Gendalf the White',
      }));
    };

    return (
      <>
        <h1>
            Greetings. My name is {name} and I am {age} years old.
        </h1>
        <button onClick = { _transform }>Transform</button>
      </>
    );
};

render(<Wizard />, document.getElementById('root'));
