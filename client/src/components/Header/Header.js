import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import Media from '../Media/Media.js';

function Header() {
    return (
    <header className='header'>
        <NavLink className= "link" to="/">
        Home 
        </NavLink>
        <NavLink className= "link" to="/login">
         |Login
        </NavLink>
        Journal
        <Media className='player'/>
    </header>
    
    
    );
    }
    export default Header;