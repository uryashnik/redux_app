import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

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
                className='btn btn-primary bnt-lg' id='rnd'>RND</button>
        </div >
    )
};
const mapStateToProps = (state) => {
    return {
        counter: state
    };
};


const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return{
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random()*10);
            rnd(randomValue);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);