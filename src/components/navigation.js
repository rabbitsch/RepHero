import React from 'react';

import toggleNav from './togglenav';
import './navbar.css';

const NavBar = props =>(
  <header className="toolbar">
    <nav className="toolbar_nav">
      <ul>
        <li><a href="#home" >Home</a></li>
        <li><a href ="#logout">Log out</a></li>
      </ul>

     </nav>
  </header>
);

export {NavBar};
