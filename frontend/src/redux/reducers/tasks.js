
const reducer = (state=[], action) => {

    switch(action.type) {

        case 'CREATE_TASK':
            return [...state, action.payload];

        case 'GET_TASKS':
            return action.payload;

        case 'UPDATE_TASK':
            return state;

        case 'DELETE_TASK':
            return [state.filter(task => task._id !== action.payload._id)];

        default:
            return state;
    }
}

export default reducer;