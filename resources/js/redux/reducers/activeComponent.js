const activeComponentReducer = (component = null, action) => {
    if (action.type == 'SET_ACTIVE_COMPONENT') {
        if (action.payload != undefined) component = action.payload;
        return component;
    } else {
        return component;
    }
}

export default activeComponentReducer;