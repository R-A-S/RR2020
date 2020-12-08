// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return props.visible ? (
        <ul>
            <li>
                First name: <b>{props.firstName}</b>
            </li>
            <li>
                Last name: <b>{props.lastName}</b>
            </li>
        </ul>
    ) : null;
};

const Parent = () => {
    const profile = {
        firstName: 'Hermione',
        lastName:  'Granger',
    };

    return (
        <>
            <Child
                visible
                {  ...profile }
            />
            <Child
                visible = { false }
                { ...profile }
            />
        </>
    );
};

render(<Parent />, document.getElementById('root'));
