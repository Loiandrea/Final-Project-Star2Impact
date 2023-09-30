import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
       <Link to="/" className="logo">
        <img src={logo} alt='Logo'></img>

        <h1 className='nav-h1'>Global warming</h1>

        
      </Link>
      <div className="menu" onClick={() =>{
        setMenuOpen(!menuOpen);
      } 
      }>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/temperature">Temperature</Link></li>
        <li><Link to="/arcticchart">Arctic</Link></li>
        <li><Link to="/co2chart">CO2</Link></li>
        <li><Link to="/methane">Methane</Link></li>
        <li><Link to="/nitrousoxide">NO2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
