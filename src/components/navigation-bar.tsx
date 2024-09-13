import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './navigation-bar.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="logo.png" alt="Technocureplus" className="logo-img" />
          TechMart
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FiMenu />
      </div>

      {/* Sidebar Navigation for Small Screens */}
      <div className={`sidebar ${menuOpen ? 'show-sidebar' : ''}`}>
        {/* Close icon in sidebar */}
        <div className="close-sidebar" onClick={toggleMenu}>
          <FiX />
        </div>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/cart" onClick={toggleMenu}>Cart</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
