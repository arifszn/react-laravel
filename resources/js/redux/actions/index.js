const setAuthUser = (user) => {
    return {
        type: 'SET_AUTH_USER',
        payload: user
    }
};

export default setAuthUser;