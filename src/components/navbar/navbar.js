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
            <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
            <li><a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
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
