import React from 'react';

import '../../App.css';
import './styles.css';
import icon_board from '../../img/icon_board.svg';


export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='brand'>
                    <img className='logo' src={icon_board} alt='icon board' />
                    <h2 className='title'>KanBan</h2>
                </div>
                <button className='btn' type='button'>Reset Board</button>
            </div>
        </div>
    )
}
