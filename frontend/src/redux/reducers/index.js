import { combineReducers } from "redux";

// Import reducers
import tasks from './tasks';

export default combineReducers({
    tasks: tasks,
});