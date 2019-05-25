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
    return bindActionCreators(actions, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);