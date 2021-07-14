const productsInitialState = {
	items: [],
	perPage: 8,
	totalItem: 0,
	totalPage: 1
};

export const productsReducer = ( state = productsInitialState, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}
