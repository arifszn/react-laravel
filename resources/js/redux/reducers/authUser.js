const authUserReducer = (authUser = null, action) => {
    if (action.type == 'SET_AUTH_USER') {
        if (action.payload != undefined) authUser = action.payload;
        return authUser;
    } else {
        return authUser;
    }
}

export default authUserReducer;