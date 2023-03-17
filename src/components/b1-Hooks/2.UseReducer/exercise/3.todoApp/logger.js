function logger(reducer) {
    return (prevState, action) =>{
        console.group(action.type);
        console.log('prev state', prevState);
        console.log('actions', action);
        const newState = reducer(prevState, action)
        console.log('next state', newState);
        console.groupEnd();
        return newState
    }
}
export default logger