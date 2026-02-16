import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AnnouncementBanner.css';

interface AnnouncementBannerProps {
  onClose: () => void;
}

const AnnouncementBanner = ({ onClose }: AnnouncementBannerProps) => {
  return (
    <div className="announcement-banner">
      <div className="announcement-content">
        <span className="announcement-tag">UPCOMING TALK</span>
        <span className="announcement-text">
          AI as a Coach, Not a Shortcut &middot; Monday, March 2 @ 6:00 PM
        </span>
        <Link to="/talk" className="announcement-link">
          Get Details →
        </Link>
      </div>
      <button className="announcement-close" onClick={onClose} aria-label="Close announcement">
        ×
      </button>
    </div>
  );
};

export default AnnouncementBanner;
