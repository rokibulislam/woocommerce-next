export const addToCart = id => async dispatch => {
    dispatch({ type: 'ADD_TO_CART', payload: ''})
}

export const clearCart = () => async dispatch => {
    dispatch({ type: 'CLEAR_CART', payload: ''})
}

export const fetchCartItems = () => async dispatch => {
    dispatch({ type: 'FETCH_CART', payload: ''})
}
