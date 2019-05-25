import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className='jumbotron'>
            <h2>{counter}</h2>
            <button
                onClick={inc}
                className='btn btn-primary bnt-lg' id='inc'>INC</button>
            <button
                onClick={dec}
                className='btn btn-primary bnt-lg' id='dec'>DEC</button>
            <button
                onClick={rnd}
                className='btn btn-primary bnt-lg' id='rnd'>DEC</button>
        </div >
    )
};

export default Counter;