export const setProducts = query => async dispatch => {
    dispatch({ type: 'SET_PRODUCTS', payload: ''})
}

export const setCurrencyType = () => async dispatch => {
    dispatch({ type: 'SET_CURRENCY_TYPE', payload: ''}) 
}

export const addToCart = id => async dispatch => {
    dispatch({ type: 'ADD_TO_CART', payload: ''})
}

export const clearCart = () => async dispatch => {
    dispatch({ type: 'CLEAR_CART', payload: ''})
}

export const fetchCartItems = () => async dispatch => {
    dispatch({ type: 'FETCH_CART', payload: ''})
}

export const fetchPaymentGateways = () => async dispatch => {
    dispatch({ type: 'FETCH_PAYMENT_GATEWAYS', payload: ''})
}

export const setShippingMethods = () => async dispatch => {
    dispatch({ type: 'FETCH_SHIPPING_METHODS', payload: ''} );
}

export const updateShippingMethods = id => async dispatch => {
    dispatch({ type: 'UPDATE_SHIPPING_METHODS', payload: '' } )
}

export const calculateShippingMethods = postData => async dispatch => {
    dispatch({ type: 'CALCULATE_SHIPPING_METHODS', payload: '' } ) 
}

export const setCountries = () => async dispatch => {
    dispatch({ type: 'SET_COUNTRIES', payload: '' } ) 
}

export const setCouponData = () => async dispatch => {
    dispatch({ type: 'APPLY_COUPON', payload: '' } ) 
}

export const applyCouponToCart = payload => async dispatch => {
    dispatch({ type: 'SET_COUPON_DATA', payload: '' } ) 
}

export const makeOrder = payload => async dispatch => {
    return { type: "MAKE_ORDER", payload: '' };
}

export const setCurrentUser = email => async dispatch => {
    return { type: "SET_CURRENT_USER", payload: '' };
}

export const updateCurrentUser = (userId, userData) => async dispatch => {
    return { type: "UPDATE_CURRENT_USER", payload: '' };
}

export const removeCurrentUser = () => async dispatch => {
    return { type: "REMOVE_CURRENT_USER", payload: '' };
}

export const filterProduct = obj => async dispatch => {
    return { type: "FILTER_PRODUCT", payload: '' };
}

export const resetFilterProduct = () => async dispatch => {
    return { type: "RESET_FILTER_PRODUCT", payload: '' };
}

export const setProductCategories = () => async dispatch => {
    return { type: "SET_PRODUCT_CATEGORIES", payload: '' };
}

export const setFilterableProductAttributes = () => async dispatch => {
    return { type: "SET_FILTERABLE_PRODUCT_ATTRIBUTES", payload: '' }; 
}

export const setWishlistItems = () => async dispatch => {
    return { type: "SET_WISHLIST_ITEMS", payload: '' };
}

export const addWishlistItem = postData => async dispatch => {
    return { type: "ADD_WISHLIST_ITEM", payload: '' };
}

export const removeWishlistItem = postData => async dispatch => {
    return { type: "REMOVE_WISHLIST_ITEM", payload: '' };
}

export const searchWishlist = searchValue => async dispatch => {
    return { type: "SEARCH_WISHLIST_ITEM", payload: '' };   
}

//Action Types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


//Action Creator
export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});