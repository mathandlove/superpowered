import { useState, useEffect } from 'react';
import AnnouncementBanner from './AnnouncementBanner';
import './Navbar.css';

interface NavbarProps {
  hideCta?: boolean;
  hideBanner?: boolean;
}

const Navbar = ({ hideCta = false, hideBanner = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

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
      {!hideBanner && showBanner && <AnnouncementBanner onClose={() => setShowBanner(false)} />}
      <div className="navbar-inner-wrapper">
        <div className="navbar-container">
          <div className="navbar-logo">
            Superpowered
          </div>
          <div className="navbar-links">
            <a href="#how-it-works">How it works</a>
            <a href="#stories">Stories</a>
            <a href="#about">About</a>
          </div>
          {!hideCta && (
            <div className="navbar-cta">
              <a href="https://outlook.office.com/book/Superpower@robotsandpencils.com" target="_blank" rel="noopener noreferrer" className="nav-btn">Book Session</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
