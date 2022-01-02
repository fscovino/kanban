import * as api from '../../api';

// ###### Action Creators ######

// Since this action is asynchronus we need to use thunk by
// chainning a second function: async (dispatch) => {}

// Create Tasks
export const createTask = (task) => async(dispatch) => {

    try {
        const response = await api.createTask(task);
        const action = {type: 'CREATE_TASK', payload: response.data};
        dispatch(action);

    } catch (error) {
        console.log(error);
    }
}


// Retreieves All Tasks
 export const getTasks = () => async (dispatch) => {

    try {
        const response = await api.getTasks();
        const action = {type: 'GET_TASKS', payload: response.data};
        dispatch(action);

    } catch (error) {
        console.log(error);
    }
}

// Update Task
export const updateTask = (task) => async(dispatch) => {

    try {
        const response = await api.updateTask(task);
        const action = {type: 'UPDATE_TASK', payload: response.data};
        dispatch(action);

    } catch (error) {
        console.log(error);
    }
}

// Delete Task
export const deleteTask = (id) => async(dispatch) => {

    try {
        const response = await api.deleteTask(id);
        const action = {type: 'DELETE_TASK', payload: response.data};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}