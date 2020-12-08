// Core
import React from 'react';
import { render } from 'react-dom';

const Child = ({ firstName, lastName }) => {
    return (
        <h1>
            Hi, {firstName} {lastName}!
        </h1>
    );
};

const Parent = () => {
    const profile = {
        firstName: 'Hermione',
        lastName:  'Granger',
    };

    return (
      /*<Child { ...profile } />*/
      <Child firstName = {profile.firstName} lastName={profile.lastName} />
    );
};

render(<Parent />, document.getElementById('root'));
