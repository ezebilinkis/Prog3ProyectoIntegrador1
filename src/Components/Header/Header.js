import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <div className='logo'>
          <img className='foto' src="./img/logo.jpg" alt="" />
        </div>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/favoritos'>Favoritos</Link></li>
        <li><Link to='/verTodasCanciones'>Ver más canciones</Link></li>
        <li><Link to='/verTodosAlbums'>Ver más albums</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;