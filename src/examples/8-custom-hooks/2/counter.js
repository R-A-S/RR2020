// Core
import React from 'react';

// Custom Hooks
import {useCounter} from './useCounter';

export const Counter = () => {
    const {increase, decrease, value} = useCounter();

    return (
        <>
            <button onClick={decrease}>-</button>
            <h1>
                {value}
            </h1>
            <button onClick={increase}>+</button>
        </>
    );
};
