const rnd = (payload) => ({type: 'RND', payload});

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
}

bindActionCreator(rnd(12345), dispatch);
