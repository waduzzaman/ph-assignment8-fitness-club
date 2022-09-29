import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'

const Header = () => {
    return (
     <nav className='header'>
            <img src={ logo } alt="" />   
            <h1>Top Fitnees Club</h1>
     </nav>    
                         
       
    );
};

export default Header;