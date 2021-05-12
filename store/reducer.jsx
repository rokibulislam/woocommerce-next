import { combineReducers } from 'redux'

const productsInitialState = {
	items: [],
	perPage: 8,
	totalItem: 0,
	totalPage: 1
};

export const productsReducer = ( state = productsInitialState, action ) => {

    switch(action.type) {
        
    }
}


export default combineReducers({
    products: productsReducer,
})