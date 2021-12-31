import React, { useState, useEffect } from 'react'

// Import Components & Styles
import Form from '../Form/Form.js';
import Header from '../Header/Header.js';
import Status from '../Status/Status.js';
import './styles.css';


export default function Board(props) {

    const [tasks, setTasks] = useState([]);
    const [currentTask, SetCurrentTask] = useState({});
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    }

    const openTask = (task) => {
        
        SetCurrentTask({
            _id: task._id,
            title: task.title,
            description: task.description,
            date: String(task.date).split('T')[0],
            assignedTo: task.assignedTo,
            status: task.status
        });

        setIsFormVisible(true);
    }
    

    useEffect(() => {
        setTasks(props.tasks);
    }, [props.tasks]);


    return (
        <div className='board'>
            <Header />
            <div className='container'>
                <Status type='pending' openTask={openTask} tasks={ tasks.filter((task) => task.status === 'pending') } />
                <Status type='coding' openTask={openTask} tasks={ tasks.filter((task) => task.status === 'coding') } />
                <Status type='testing' openTask={openTask} tasks={ tasks.filter((task) => task.status === 'testing') } />
                <Status type='done' openTask={openTask} tasks={ tasks.filter((task) => task.status === 'done') } />
            </div>
            {isFormVisible ? <Form toggleForm={toggleForm} task={currentTask} /> : null}
        </div>
    )
}
