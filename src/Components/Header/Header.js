import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <div className='logo'>
          <img src="./img/logo.jpg" alt="" />
        </div>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/favoritos'>Favoritos</Link></li>
        <li><Link to='/vertodas'>Ver todas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;