import './index.scss';
import { useState, useEffect } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faStackOverflow,
  faWhatsapp,
  faDocker,
  faPython,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faCode,
  faServer,
  faBrain,
  faCloud,
  faCog,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const devOpsIcons = [
    { icon: faDocker, label: 'Docker', color: '#0db7ed' },
    { icon: faServer, label: 'DevOps', color: '#00f5ff' },
    { icon: faBrain, label: 'AI/ML', color: '#ff6b6b' },
    { icon: faCloud, label: 'Cloud', color: '#ffd700' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/dilan-shanuka-750552195/',
      icon: faLinkedin,
      label: 'LinkedIn',
      color: '#0077b5',
    },
    {
      href: 'https://github.com/IT21182914',
      icon: faGithub,
      label: 'GitHub',
      color: '#333',
    },
    {
      href: 'https://www.youtube.com/channel/UCNtyR40eSgU6BKTx9TRNdng',
      icon: faYoutube,
      label: 'YouTube',
      color: '#ff0000',
    },
    {
      href: 'https://stackoverflow.com/users/15040717/dilan-shanuka',
      icon: faStackOverflow,
      label: 'Stack Overflow',
      color: '#f58025',
    },
    {
      href: 'https://Wa.me/+94710479052',
      icon: faWhatsapp,
      label: 'WhatsApp',
      color: '#25d366',
    },
  ];

  const navigationItems = [
    { to: '/', icon: faHome, label: 'HOME', exact: true },
    { to: '/about', icon: faUser, label: 'ABOUT' },
    { to: '/portfolio', icon: faSuitcase, label: 'PORTFOLIO' },
    { to: '/contact', icon: faEnvelope, label: 'CONTACT' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <Link className="mobile-logo" to="/" onClick={() => setShowNav(false)}>
          <img src={LogoS} alt="Dilan Shanuka Logo" />
          <span className="mobile-name">Dilan Shanuka</span>
        </Link>

        <div className="mobile-controls">
          <div className="mobile-status">
            <div
              className={`status-dot ${isOnline ? 'online' : 'offline'}`}
            ></div>
          </div>
          <button
            className="hamburger-btn"
            onClick={() => setShowNav(true)}
            aria-label="Open navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {showNav && (
        <div
          className="mobile-overlay"
          onClick={() => setShowNav(false)}
          aria-hidden="true"
        />
      )}

      <div className="nav-bar">
        {/* Enhanced Logo Section - Desktop Only */}
        <div className="logo-section desktop-only">
          <Link className="logo" to="/" onClick={() => setShowNav(false)}>
            <div className="logo-container">
              <img src={LogoS} alt="Dilan Shanuka Logo" className="main-logo" />
              <div className="logo-glow"></div>
            </div>
            <img className="sub-logo" src={LogoSubtitle} alt="dilanshanuka" />
          </Link>

          {/* Status Indicator */}
          <div className="status-indicator">
            <div
              className={`status-dot ${isOnline ? 'online' : 'offline'}`}
            ></div>
            <span className="status-text">
              {isOnline ? 'Available' : 'Offline'}
            </span>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <nav className={`main-nav ${showNav ? 'mobile-show' : ''}`}>
          {/* Mobile Header inside nav */}
          <div className="mobile-nav-header">
            <div className="mobile-nav-title">
              <img src={LogoS} alt="Logo" className="mobile-nav-logo" />
              <div>
                <h3>Dilan Shanuka</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <button
              className="close-btn"
              onClick={() => setShowNav(false)}
              aria-label="Close navigation menu"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            {navigationItems.map((item, index) => (
              <NavLink
                key={item.to}
                exact={item.exact ? 'true' : undefined}
                activeclassname="active"
                className={`nav-link ${item.label.toLowerCase()}-link`}
                to={item.to}
                onClick={() => setShowNav(false)}
              >
                <div className="nav-icon-container">
                  <FontAwesomeIcon icon={item.icon} />
                  <div className="nav-background"></div>
                </div>
                <span className="nav-label">{item.label}</span>
                <div className="nav-arrow">→</div>
              </NavLink>
            ))}
          </div>

          {/* Mobile Tech Stack */}
          <div className="mobile-tech-section">
            <h4>Specializations</h4>
            <div className="mobile-tech-grid">
              {devOpsIcons.map((tech, index) => (
                <div key={index} className="mobile-tech-item">
                  <FontAwesomeIcon
                    icon={tech.icon}
                    style={{ color: tech.color }}
                  />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="mobile-social-section">
            <h4>Connect With Me</h4>
            <div className="mobile-social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-link"
                  style={{ '--brand-color': social.color }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="mobile-nav-footer">
            <div className="mobile-time">
              {currentTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            </div>
            <div className="mobile-status-text">
              <div
                className={`status-dot ${isOnline ? 'online' : 'offline'}`}
              ></div>
              {isOnline ? 'Available for work' : 'Currently offline'}
            </div>
          </div>
        </nav>

        {/* DevOps/AI Tech Stack Indicators - Desktop Only */}
        <div className="tech-stack desktop-only">
          <div className="tech-title">Tech Stack</div>
          {devOpsIcons.map((tech, index) => (
            <div
              key={index}
              className="tech-item"
              title={tech.label}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FontAwesomeIcon
                icon={tech.icon}
                style={{ color: tech.color }}
                className="tech-icon"
              />
              <div className="tech-pulse"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Social Links - Desktop Only */}
        <div className="social-section desktop-only">
          <div className="social-title">Connect</div>
          <ul className="social-links">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className="social-link"
                  style={{ '--hover-color': social.color }}
                >
                  <FontAwesomeIcon icon={social.icon} className="social-icon" />
                  <div className="social-bg"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* System Info Panel - Desktop Only */}
        <div className="system-info desktop-only">
          <div className="system-time">
            {currentTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}
          </div>
          <div className="system-date">
            {currentTime.toLocaleDateString([], {
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </div>

        {/* Background Animation - Desktop Only */}
        <div className="sidebar-bg-animation desktop-only">
          <div className="bg-particle"></div>
          <div className="bg-particle"></div>
          <div className="bg-particle"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
