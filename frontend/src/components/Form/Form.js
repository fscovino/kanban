import React, { useState, useEffect } from 'react'

// Import Actions & Dispacth
import { useDispatch } from 'react-redux';
import { createTask, updateTask } from '../../redux/actions/tasks.js';

// Import Components & Styles
import './styles.css';
import icon_dots from '../../img/icon_dots.svg';
import icon_x from '../../img/icon_x.svg';


function Form(props) {

    const dispatch = useDispatch();
    const [task, setTask] = useState({
        _id: '',
        title: '',
        description: '',
        date: '',
        assignedTo: '',
        status: ''
    });

    const deleteTask = () => {
        console.log('You are trying to delete the task');
    }

    const saveTask = () => {
        
        if (task._id) {
            dispatch(updateTask(task));
        } else {
            dispatch(createTask(task));
        }
    }

    useEffect(() => {
        setTask(props.task);
    }, [props.task]);

    return (
        <div className='form'>
            <div className="form-header">
                <div className='form-title'>
                    <img src={icon_dots} alt="icon dots" />
                    <h2>TASK</h2>
                </div>
                <img className='btn-close' src={icon_x} alt="icon close" onClick={props.toggleForm}/>
            </div>
            <form>
                <div className="form-control span-75">
                    <label htmlFor="title">Title</label><br />
                    <input type="text" id="title" name="title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />  
                </div>
                <div className="form-control span-25">
                    <label htmlFor="date">Date</label><br />
                    <input type="date" id="date" name="date" value={task.date} onChange={(e) => setTask({ ...task, date: e.target.value })} />  
                </div>
                <div className="form-control span-100">
                    <label htmlFor="description">Description</label><br />
                    <textarea id="description" name="description" rows="10" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />  
                </div>
                <div className="form-control span-25">
                    <label htmlFor="owner">Assigned To</label><br />
                    <input type="text" id="owner" name="owner" value={task.assignedTo} onChange={(e) => setTask({ ...task, assignedTo: e.target.value })} />  
                </div>
                <div className="form-control span-15">
                    <label htmlFor="status">Status</label><br />
                    <select id="status" name="status" value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })} >
                        <option value="pending">Pending</option>
                        <option value="coding">Coding</option>
                        <option value="testing">Testing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button className='btn-delete' type="button" onClick={deleteTask}>Delete</button>
                <button className='btn-save' type="button" onClick={saveTask}>Save & Close</button>
            </form>
        </div>
    )
}

export default Form
