const setActiveComponent = (component) => {
    return {
        type: 'SET_ACTIVE_COMPONENT',
        payload: component
    }
};

export default setActiveComponent;