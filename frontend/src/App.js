import React, { useEffect } from 'react';

// Import Components & Styles
import Board from './components/Board/Board';
import './App.css';

// Import Dispatch and Actions
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from './redux/actions/tasks.js';


function App() {

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
      dispatch(getTasks());
  }, [dispatch]);

  return (
    <Board  tasks={tasks}/>
  );
}

export default App;