import React, { useState } from 'react'
import Form from '../Form/Form.js';
import Header from '../Header/Header.js';
import Status from '../Status/Status.js';

import './styles.css';

export default function Board() {

    const [isFormVisible, setIsFormVisible] = useState(true);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    }

    return (
        <div className='board'>
            <Header />
            <div className='container'>
                <Status title='pending' />
                <Status title='coding' />
                <Status title='testing' />
                <Status title='done' />
            </div>
            {isFormVisible ? <Form toggleForm={toggleForm} /> : null}
        </div>
    )
}
