import React from 'react'

// Import Components & Styles
import Task from '../Task/Task';
import './styles.css';
import icon_dots from '../../img/icon_dots.svg';
import icon_plus from '../../img/icon_plus.svg';


export default function Status(props) {

    
    const addTask = () => {
        
        const date = new Date();
        const today = date.toISOString().split('T')[0];

        props.openTask({
            title: '',
            description: '',
            date: today,
            assignedTo: '',
            status: props.type
        });
    }


    return (
        <div className='status-bg'>
            <div className={`status-head status-${props.type}`}>
                <img src={icon_dots} alt='icon dots' />
                <h3 className='status-title'>{props.type}</h3>
                <img className='btn-add-task' src={icon_plus} alt='icon plus' onClick={addTask} />
            </div>
            <div className='task-list'>
                {props.tasks.map((task) => (<Task key={task._id} task={task} openTask={props.openTask} />))}
            </div>
        </div>
    )
}
