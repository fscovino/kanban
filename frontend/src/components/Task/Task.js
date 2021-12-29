import React from 'react'

import './styles.css';
import icon_eye from '../../img/icon_eye.svg';

export default function Task(props) {

    const openTask = () => {
        props.openTask(props.task);
    }

    return (
        <div className={`task-card card-${props.task.status}`}>
            <h3 className='task-title'>{props.task.title}</h3>
            <h4 className='task-owner'>by {props.task.assignedTo}</h4>
            <div className='task-footer'>
                <p className='task-date'>{String(props.task.date).split('T')[0]}</p>
                <img className='btn-task-open' src={icon_eye} alt='eye icon' onClick={openTask} />
            </div>
        </div>
    )
}
