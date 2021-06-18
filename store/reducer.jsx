import { combineReducers } from "redux";

const productsInitialState = {
	items: [],
	perPage: 8,
	totalItem: 0,
	totalPage: 1
};

const productCategoryInitialState = {
    items: []
};

const wishlistInitialState = {
    items: [],
};

const currentUserInitialState = {
    data: false
}

const countryInitialState = {
    items: []
}

const orderInitialState = {
    items: []
}

const shippingInitialState = {
    data: []
}

const paymentInitialState = {
    gateways: []
}

const couponInitialState = {
    items: []
}

const cartInitialState = {
    items: []
}

const currencyInitialState = {
    
}

export const currencyReducer = ( state = currencyInitialState, action ) => {
    switch(action.type) {
        default:
            return state;  
    }
}


export const cartReducer = ( state = cartInitialState, action ) => {
    switch(action.type) {
        default:
            return state; 
    }
}

export const couponReducer = ( state = couponInitialState, action ) => {
    switch(action.type) {
        default:
            return state; 
    }
}

export const paymentReducer = ( state = paymentInitialState, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const shippingReducer = ( state = shippingInitialState, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const orderReducer = ( state = orderInitialState, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}


export const productsReducer = ( state = productsInitialState, action ) => {
    switch(action.type) {
        
        default:
            return state;
    }
}

export const countryReducer = ( state = countryInitialState, action ) => {
    switch(action.type) {
        default:
            return state;  
    }
}


export const userReducer = ( state = currentUserInitialState, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const productCategoryReducer = (state = productCategoryInitialState, action) => {
    switch(action.type) {
        default:
            return state;
    } 
}


export const wishlistReducer = (state = wishlistInitialState, action) => {
    switch(action.type) {
        default:
            return state;
    } 
}

import {DECREMENT_COUNTER, INCREMENT_COUNTER} from './actions';

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};


export default combineReducers({
	products: productsReducer,
	// currencyType: currencyTypeReducer,
	cart: cartReducer,
	coupons: couponReducer,
	payment: paymentReducer,
	shipping: shippingReducer,
	orders: orderReducer,
	countries: countryReducer,
	currentUser: userReducer,
	// productFilterQuery: productFilterReducer,
	productCategories: productCategoryReducer,
	// filterableProductAttribute: filterableProductAttributeReducer,
    wishlist: wishlistReducer,
    counter: counterReducer
});