import React, { useState, useEffect } from 'react';
import './index.scss';

const UpdateBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('portfolioBannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('portfolioBannerDismissed', 'true');
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="update-banner">
      <div className="banner-content">
        <div className="banner-icon">
          <div className="construction-icon">🚧</div>
          <div className="pulse-dot"></div>
        </div>

        <div className="banner-text">
          <span className="banner-title">Portfolio Update in Progress</span>
          <span className="banner-subtitle">
            This site is under active development. Some sections may be
            incomplete, but you can already explore my core projects, skills,
            and experiences.
          </span>
        </div>

        <div className="banner-actions">
          <div className="progress-indicator">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-text">85% Complete</span>
          </div>

          <button
            className="dismiss-btn"
            onClick={handleDismiss}
            aria-label="Dismiss banner"
          >
            <span className="dismiss-icon">×</span>
          </button>
        </div>
      </div>

      <div className="tech-grid">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
    </div>
  );
};

export default UpdateBanner;
