import React from "react";
import './header.css';

function Header() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        {/* Atlan logo */}
        <img
          width='90'
          height='30'
          src='https://website-assets.atlan.com/img/atlan-blue.svg'
          alt='Atlan Logo'
        />
      </div>
      <div className='app-name'>
        <h1>Query Master</h1>
      </div>
      <ul className='menu'>
        <li className='selected'>
          <a href='javascript:void(0)'>Home</a>
        </li>
        <li>
          <a href='javascript:void(0)'>About Us</a>
        </li>
        <li>
          <a href='https://github.com/deep1532/Query-App.git'>
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
