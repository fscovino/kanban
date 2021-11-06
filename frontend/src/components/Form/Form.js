import React from 'react'

import './styles.css';

import icon_dots from '../../img/icon_dots.svg';
import icon_x from '../../img/icon_x.svg';

function Form() {
    return (
        <div className='form'>
            <div className="form-header">
                <div className='form-title'>
                    <img src={icon_dots} alt="icon dots" />
                    <h2>TASK NAME <span>(task status)</span></h2>
                </div>
                <img className='btn-close' src={icon_x} alt="icon close" />
            </div>
            <form>
                <div className="form-control span-75">
                    <label htmlFor="title">Title</label><br />
                    <input type="text" id="title" name="title" />  
                </div>
                <div className="form-control span-25">
                    <label htmlFor="date">Date</label><br />
                    <input type="date" id="date" name="date" />  
                </div>
                <div className="form-control span-100">
                    <label htmlFor="description">Description</label><br />
                    <textarea id="description" name="description" rows="10" />  
                </div>
            </form>
        </div>
    )
}

export default Form
