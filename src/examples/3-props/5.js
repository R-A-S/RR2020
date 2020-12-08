// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return (
        <h1>
            It is <code>{props.CURRENT_YEAR}</code>.
        </h1>
    );
};

const Parent = () => {
    const CURRENT_YEAR = new Date().getFullYear();

    return (
      <Child CURRENT_YEAR = { CURRENT_YEAR } />
    );
};

render(<Parent />, document.getElementById('root'));
