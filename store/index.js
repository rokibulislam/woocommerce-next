import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootreducer';

import {createWrapper } from 'next-redux-wrapper';

export const initStore = (initialState, options) => {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );
};


// export an assembled wrapper
export const wrapper = createWrapper(initStore, {debug: true});