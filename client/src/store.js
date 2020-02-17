import{applyMiddleware,compose,createStore}from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialstate={};
const middleware=[thunk];

const store=createStore(reducers,initialstate,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    ))


    export default store;   