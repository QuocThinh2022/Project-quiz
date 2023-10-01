
const authenReducer = (state = false, action) => {
    if (action.type === 'CHECK_AUTHEN')
        return action.status;
    return state;
}

export default authenReducer;