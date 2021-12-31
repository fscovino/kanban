import axios from 'axios';

// Get the Server URL for Tasks
const URL = 'http://localhost:3001/task';

// Export the funciton to connect to the server
export const createTask = (task) => axios.post(URL, task);
export const getTasks = () => axios.get(URL);
export const updateTask = (task) => axios.patch(`${URL}/${task._id}`, task);