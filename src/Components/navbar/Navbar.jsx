import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-dark-pill">
        
        <div className="nav-logo">
          <h1>UNIVERSE LOGIC</h1>
        </div>

        <div className="nav-center-pill">
          <a href="#platform" className="neon-link">HOME</a>
          <a href="#resources" className="neon-link">PRODUCTS</a>
          <a href="#customers" className="neon-link">SERVICES</a>
          <a href="#pricing" className="neon-link">CONTACTS</a>
        </div>

        <div className="nav-actions">
          {/* 2. Replace the <a> tag with a <Link> component targeting "/login" */}
          <Link to="/login" className="text-link">LOGIN | SIGNUP</Link>
          <button className="btn-orange">Book a demo</button>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;