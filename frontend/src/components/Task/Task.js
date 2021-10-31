import React from 'react'

import './styles.css';
import icon_eye from '../../img/icon_eye.svg';

export default function Task() {
    return (
        <div className='task-card'>
            <h3 className='task-title'>Create reports and folders</h3>
            <h4 className='task-owner'>by Francisco</h4>
            <div className='task-footer'>
                <p className='task-date'>10/21/2021</p>
                <img className='btn-task-open' src={icon_eye} alt='eye icon' />
            </div>
        </div>
    )
}
