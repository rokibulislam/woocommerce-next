export const setShippingMethods = () => async dispatch => {
    dispatch({ type: 'FETCH_SHIPPING_METHODS', payload: ''} );
}

export const updateShippingMethods = id => async dispatch => {
    dispatch({ type: 'UPDATE_SHIPPING_METHODS', payload: '' } )
}

export const calculateShippingMethods = postData => async dispatch => {
    dispatch({ type: 'CALCULATE_SHIPPING_METHODS', payload: '' } ) 
}