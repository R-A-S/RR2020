// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return (
        <h1>
            It is <code>{props.CURRENT_YEAR}</code>.
            It will be <code>{props.NEXT_YEAR}</code>.
        </h1>
    );
};

const Parent = () => {
    const CURRENT_YEAR = new Date().getFullYear();
    const PREFIX_1 = 'CURRENT';
    const PREFIX_2 = 'NEXT';

    const data = {
        [ `${PREFIX_1}_YEAR` ]: CURRENT_YEAR,
        [ `${PREFIX_2}_YEAR` ]: CURRENT_YEAR + 1,
    };

    return <Child { ...data } />;
};

render(<Parent />, document.getElementById('root'));
