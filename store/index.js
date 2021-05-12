import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


export const initStore = (initialState,options) => {
    return createStore(
        '',
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}