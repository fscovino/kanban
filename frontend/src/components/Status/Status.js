import React from 'react'

import './styles.css';

import icon_dots from '../../img/icon_dots.svg';
import icon_plus from '../../img/icon_plus.svg';

export default function Status() {
    return (
        <div className='status-bg'>
            <div className='status-head'>
                <img src={icon_dots} alt='icon dots' />
                <h3 className='status-title'>PENDING</h3>
                <img src={icon_plus} alt='icon dots' />
            </div>
        </div>
    )
}
