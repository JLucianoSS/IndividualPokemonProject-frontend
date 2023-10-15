

import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
/* Nota: composeWithDevTools me permitira escuchar el estado de mi aplicacioón mediante la extension de google chrome redux dev tools */

import rootReducer from './reducer';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
    rootReducer,
    composeWithDevTools(composeEnhancer(applyMiddleware(thunk))),
    
);

export default store