import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          Elliott Hedman
        </div>
        <div className="navbar-links">
          <a href="#how-it-works">How it works</a>
          <a href="#stories">Stories</a>
          <a href="#about">About</a>
        </div>
        <div className="navbar-cta">
          <a href="#" className="nav-btn">Book Session</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
