import {createStore, bindActionCreators} from 'redux';
import reduser from './reducer'
import * as actions from './actions';


const store = createStore(reduser);
const {dispatch} = store;


const {inc,dec,rnd} = 
bindActionCreators(actions, dispatch);


document.getElementById('inc')
.addEventListener('click', () => {
    inc();
});

document.getElementById('dec')
.addEventListener('click', () => {
    dec();
});

const update = () => {
    document.getElementById('counter')
    .innerHTML = store.getState();
};

document.getElementById('rnd')
.addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
});

store.subscribe(update);