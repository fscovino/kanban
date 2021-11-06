import React from 'react'
import Task from '../Task/Task';

import './styles.css';

import icon_dots from '../../img/icon_dots.svg';
import icon_plus from '../../img/icon_plus.svg';

export default function Status(props) {

    function handleClick(e) {
        alert(e.target.className + ' Hello, did you click');
    }

    return (
        <div className='status-bg'>
            <div className={`status-head status-${props.title}`}>
                <img src={icon_dots} alt='icon dots' />
                <h3 className='status-title'>{props.title}</h3>
                <img className='btn-add-task' src={icon_plus} alt='icon dots' onClick={handleClick} />
            </div>
            <div className='task-list'>
                <Task title={props.title}/>
            </div>
        </div>
    )
}
