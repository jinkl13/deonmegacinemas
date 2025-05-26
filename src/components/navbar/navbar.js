
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo from '../../assets/deon-logo-1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <img src={logo} className="navbar-logo" alt="Deon Cinema Logo" />

        {/* Desktop Navigation */}
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
             <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="navbar-actions">
          <button className="get-tickets">
            Get Tickets <FontAwesomeIcon icon={faArrowRight} className="ticket-icon" />
          </button>
          <div className="divider"></div>
          <div className="hamburger">
            <span className="ham1"></span>
            <span className="ham2"></span>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
