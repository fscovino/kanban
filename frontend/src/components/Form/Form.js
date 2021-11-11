import React from 'react'

import './styles.css';

import icon_dots from '../../img/icon_dots.svg';
import icon_x from '../../img/icon_x.svg';

function Form() {

    const hideForm = () => {
        console.log('You are trying to hide the form');
    }

    const deleteTask = () => {
        console.log('You are trying to delete the task');
    }

    const saveAndClose = () => {
        console.log('You are trying to save and close the form');
    }

    return (
        <div className='form'>
            <div className="form-header">
                <div className='form-title'>
                    <img src={icon_dots} alt="icon dots" />
                    <h2>TASK NAME <span>(task status)</span></h2>
                </div>
                <img className='btn-close' src={icon_x} alt="icon close" onClick={hideForm}/>
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
                <div className="form-control span-25">
                    <label htmlFor="owner">Assigned To</label><br />
                    <input type="text" id="owner" name="owner" />  
                </div>
                <div className="form-control span-15">
                    <label htmlFor="status">Status</label><br />
                    <select id="status" name="status">
                        <option value="pending">Pending</option>
                        <option value="coding">Coding</option>
                        <option value="testing">Testing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button className='btn-delete' type="button" onClick={deleteTask}>Delete</button>
                <button className='btn-save' type="button" onClick={saveAndClose}>Save & Close</button>
            </form>
        </div>
    )
}

export default Form
