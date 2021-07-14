export const setProducts = query => async dispatch => {
    dispatch({ type: 'SET_PRODUCTS', payload: ''})
}

export const filterProduct = obj => async dispatch => {
    return { type: "FILTER_PRODUCT", payload: '' };
}

export const resetFilterProduct = () => async dispatch => {
    return { type: "RESET_FILTER_PRODUCT", payload: '' };
}

export const setFilterableProductAttributes = () => async dispatch => {
    return { type: "SET_FILTERABLE_PRODUCT_ATTRIBUTES", payload: '' }; 
}