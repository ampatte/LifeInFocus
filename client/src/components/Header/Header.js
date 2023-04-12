import React from 'react';
import './Header.css';
import Media from '../Media/Media.js';

function Header() {
    return (
    <header className='header'>
        
        Journal
        <Media className='player'/>
    </header>
    
    
    );
    }
    export default Header;