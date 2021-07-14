export const setCouponData = () => async dispatch => {
    dispatch({ type: 'APPLY_COUPON', payload: '' } ) 
}

export const applyCouponToCart = payload => async dispatch => {
    dispatch({ type: 'SET_COUPON_DATA', payload: '' } ) 
}
