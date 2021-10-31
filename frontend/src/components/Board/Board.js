import React from 'react'
import Header from '../Header/Header.js';
import Status from '../Status/Status.js';

import './styles.css';

export default function Board() {
    return (
        <div className='board'>
            <Header />
            <div className='container'>
                <Status title='pending' />
                <Status title='coding' />
                <Status title='testing' />
                <Status title='done' />
            </div>
            <div className='form'>
                
            </div>
        </div>
    )
}
