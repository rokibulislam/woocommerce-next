export const setCurrentUser = email => async dispatch => {
    return { type: "SET_CURRENT_USER", payload: '' };
}

export const updateCurrentUser = (userId, userData) => async dispatch => {
    return { type: "UPDATE_CURRENT_USER", payload: '' };
}

export const removeCurrentUser = () => async dispatch => {
    return { type: "REMOVE_CURRENT_USER", payload: '' };
}